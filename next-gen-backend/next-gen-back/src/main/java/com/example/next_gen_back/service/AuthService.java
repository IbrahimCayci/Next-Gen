package com.example.next_gen_back.service;

import com.example.next_gen_back.dto.LoginRequestDto;
import com.example.next_gen_back.dto.UserRegistrationDto;
import com.example.next_gen_back.model.*;
import com.example.next_gen_back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthService(JWTService jwtService, AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

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

    public AuthenticationResponse login(LoginRequestDto requestDto) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestDto.getUsername(), requestDto.getPassword()));

        User user = userRepository.findByUsername(requestDto.getUsername()).orElse(null);
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);

    }
}
