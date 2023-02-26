package com.example.demo.service;

import com.example.demo.model.student.Student;
import com.example.demo.model.student.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public void addStudent(Student student) {
        // check if email is taken
        studentRepository.save(student);
    }
}
