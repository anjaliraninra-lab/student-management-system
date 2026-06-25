package com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @GetMapping
    public ArrayList<Student> getStudent() {

        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student(1, "Rani", "java"));
        students.add(new Student(2, "Alka", "python"));

        return students; // Return the list of students
    }
}