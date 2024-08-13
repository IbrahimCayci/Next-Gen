package com.example.next_gen_back.repository;

import com.example.next_gen_back.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MentorRepository extends JpaRepository<Mentor, Long> {
}