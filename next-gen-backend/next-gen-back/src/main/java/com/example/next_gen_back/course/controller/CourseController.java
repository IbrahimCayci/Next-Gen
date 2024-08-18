    package com.example.next_gen_back.course.controller;

    import com.example.next_gen_back.course.entity.Course;
    import com.example.next_gen_back.course.service.CourseService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.security.access.prepost.PreAuthorize;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.multipart.MultipartFile;

    import java.io.IOException;
    import java.util.List;

    @RestController
    @RequestMapping("/api/courses")
    public class CourseController {

        @Autowired
        private CourseService courseService;

        @PreAuthorize("hasRole('MENTOR')")
        @PostMapping("/add")
        public ResponseEntity<Course> addCourse(
                @RequestParam("title") String title,
                @RequestParam("description") String description,
                @RequestParam("price") double price,
                @RequestParam("thumbnail") MultipartFile thumbnail,
                @RequestParam("introVideo") MultipartFile introVideo) {

            try {
                byte[] thumbnailBytes = thumbnail.getBytes();
                byte[] introVideoBytes = introVideo.getBytes();

                Course course = courseService.addCourse(title, description, price, thumbnailBytes, introVideoBytes);
                return ResponseEntity.ok(course);
            } catch (IOException e) {
                return ResponseEntity.status(500).body(null); // Handle error properly
            }
        }

        @PreAuthorize("hasRole('MENTOR')")
        @GetMapping("/all")
        public ResponseEntity<List<Course>> getAllCourses() {
            List<Course> courses = courseService.getAllCourses();
            return ResponseEntity.ok(courses);
        }
    }
