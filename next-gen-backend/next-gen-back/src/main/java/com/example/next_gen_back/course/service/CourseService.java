package com.example.next_gen_back.course.service;

import com.example.next_gen_back.course.entity.Course;
import com.example.next_gen_back.course.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public Course addCourse(String title, String description, double price, byte[] thumbnail, byte[] introVideo) {
        Course course = new Course();
        course.setTitle(title);
        course.setDescription(description);
        course.setPrice(price);
        course.setThumbnail(thumbnail);
        course.setIntroVideo(introVideo);
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
}
