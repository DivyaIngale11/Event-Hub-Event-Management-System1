package com.eventhub.eventhum_backend.service;

import  java.util.List;
import  java.util.Optional;

import org.springframework.stereotype.Service;

import com.eventhub.eventhum_backend.model.Admin;
import com.eventhub.eventhum_backend.repository.AdminRepository;

@Service
public class AdminService {
    private final AdminRepository adminRepo;
    public AdminService(AdminRepository adminRepo) { this.adminRepo = adminRepo; }

    public String signup(Admin admin) {
        Optional<Admin> existing = adminRepo.findByEmail(admin.getEmail());
        if (existing.isPresent()) return "Admin already exists";
        adminRepo.save(admin);
        return "Admin registered successfully";
    }

    public String login(Admin admin) {
        return adminRepo.findByEmail(admin.getEmail())
                .map(a -> a.getPassword().equals(admin.getPassword()) ? "Login Success" : "Invalid Credentials")
                .orElse("Invalid Credentials");
    }

    public List<Admin> getAll() { return adminRepo.findAll(); }
}
