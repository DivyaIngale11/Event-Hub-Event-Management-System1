package com.eventhub.eventhum_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.eventhub.eventhum_backend.model.User;
import com.eventhub.eventhum_backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public String signup(User user) {
        Optional<User> existing = userRepo.findByEmail(user.getEmail());

        if (existing.isPresent()) {
            return "Email already exists";
        }

        userRepo.save(user);
        return "User registered successfully";
    }

    public String login(User user) {
        return userRepo.findByEmail(user.getEmail())
                .map(u -> u.getPassword().equals(user.getPassword())
                        ? "Login Success"
                        : "Invalid Credentials")
                .orElse("Invalid Credentials");
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }
}
