package com.example.demo.model.student;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Student {

    private Long id;
    private String name;
    private String email;
    private Gender gender;
}