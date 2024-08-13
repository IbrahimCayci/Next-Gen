package com.example.next_gen_back.controller;

import com.example.next_gen_back.model.Mentor;
import com.example.next_gen_back.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mentors")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @PostMapping
    public ResponseEntity<Mentor> createMentor(@RequestBody Mentor mentor) {
        Mentor savedMentor = mentorService.saveMentor(mentor);
        return ResponseEntity.ok(savedMentor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mentor> getMentor(@PathVariable Long id) {
        Mentor mentor = mentorService.getMentorById(id);
        return ResponseEntity.ok(mentor);
    }

    // Other endpoints
}

