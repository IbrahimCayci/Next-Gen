package com.example.next_gen_back.dto;

import com.example.next_gen_back.model.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistrationDto {

    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private Role role;

}
