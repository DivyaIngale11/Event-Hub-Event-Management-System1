package com.eventhub.eventhum_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eventhub.eventhum_backend.model.User;
import com.eventhub.eventhum_backend.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Signup
    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return userService.signup(user);
    }

    // Login
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return userService.login(user);
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAll();
    }
}
