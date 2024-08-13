package com.example.next_gen_back.service;

import com.example.next_gen_back.model.Mentee;
import com.example.next_gen_back.repository.MenteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenteeService {

    @Autowired
    private MenteeRepository menteeRepository;

    public Mentee saveMentee(Mentee mentee) {
        return menteeRepository.save(mentee);
    }

    public Mentee getMenteeById(Long id) {
        return menteeRepository.findById(id).orElse(null);
    }

}