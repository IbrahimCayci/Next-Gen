package com.example.next_gen_back.controller;

import com.example.next_gen_back.model.Mentee;
import com.example.next_gen_back.service.MenteeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentees")
public class MenteeController {

    @Autowired
    private MenteeService menteeService;

    @PostMapping
    public ResponseEntity<Mentee> createMentee(@RequestBody Mentee mentee) {
        Mentee savedMentee = menteeService.saveMentee(mentee);
        return ResponseEntity.ok(savedMentee);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mentee> getMentee(@PathVariable Long id) {
        Mentee mentee = menteeService.getMenteeById(id);
        return ResponseEntity.ok(mentee);
    }

    // Other endpoints
}