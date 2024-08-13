package com.example.next_gen_back.repository;

import com.example.next_gen_back.model.Mentee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenteeRepository extends JpaRepository<Mentee, Long> {
}