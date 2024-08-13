package com.example.next_gen_back.service;

import com.example.next_gen_back.dto.UserRegistrationDto;
import com.example.next_gen_back.model.Mentee;
import com.example.next_gen_back.model.Mentor;
import com.example.next_gen_back.model.Role;
import com.example.next_gen_back.model.User;
import com.example.next_gen_back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User register(UserRegistrationDto registrationDto) {
        User user;
        if (registrationDto.getRole() == Role.MENTOR) {
            user = new Mentor();
        } else {
            user = new Mentee();
        }

        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setUsername(registrationDto.getUsername());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setRole(registrationDto.getRole());

        return userRepository.save(user);
    }

    public User login(String username, String password) {
        User user = userRepository.findByUsername(username).orElse(null);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;
    }
}
