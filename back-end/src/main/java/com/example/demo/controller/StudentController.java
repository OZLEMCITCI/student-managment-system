package com.example.demo.controller;


import com.example.demo.model.student.Gender;
import com.example.demo.model.student.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudent(){

        return List.of(new Student(1L,"Ozlem","ozlem@gmail.com",Gender.FEMALE)
        ,new Student(2L,"Mustafa","mustafa@gmail.com",Gender.MALE));

    }
}
