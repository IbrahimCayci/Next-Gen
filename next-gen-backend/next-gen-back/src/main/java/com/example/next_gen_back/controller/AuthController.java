package com.example.next_gen_back.controller;
import com.example.next_gen_back.dto.LoginRequestDto;
import com.example.next_gen_back.dto.UserRegistrationDto;
import com.example.next_gen_back.model.AuthenticationResponse;
import com.example.next_gen_back.model.User;
import com.example.next_gen_back.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@ControllerAdvice
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserRegistrationDto registrationDto) {
        User registeredUser = authService.register(registrationDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginUser(@RequestBody LoginRequestDto loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/authTry")
    @PreAuthorize("hasRole('MENTOR')")
    public ResponseEntity<String> authTry(){
        return ResponseEntity.ok("yessssssssssssssss mentor");
    }
}

