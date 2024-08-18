package com.example.next_gen_back.course.controller;


import com.example.next_gen_back.course.entity.Course;
import com.example.next_gen_back.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/add")
    public ResponseEntity<Course> addCourse(
            String title, String description, double price, byte[] thumbnail, byte[] introVideo) {

        Course course = courseService.addCourse(title, description, price, thumbnail, introVideo);
        return ResponseEntity.ok(course);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
}