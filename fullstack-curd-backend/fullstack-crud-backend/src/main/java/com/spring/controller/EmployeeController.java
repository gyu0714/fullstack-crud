package com.spring.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.model.EmployeeDTO;
import com.spring.service.EmployeeServiceImpl;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceImpl empservice;
	
	@GetMapping("/all-emp")
	public List<EmployeeDTO> getAllEmployees() {
		return empservice.getAllEmployees();
	}
	
	@PostMapping("/add-emp")
	public void insertEmployee(@RequestBody EmployeeDTO employee) {
		System.out.println(employee);
		empservice.insertEmployee(employee);
	}
	
	@GetMapping("/emp/{empno}")
	public EmployeeDTO getEmployeeByEmpNo(@PathVariable int empno) {
		return empservice.getEmployeeByEmpno(empno);
	}
	
	@PutMapping("/edit-emp/{empno}")
	public void updateEmployee(@PathVariable int empno, @RequestBody EmployeeDTO employeeDetails) {
		empservice.updateEmployee(employeeDetails);
	}
	
	@DeleteMapping("/remove-emp/{empno}")
	public void deleteEmployee(@PathVariable int empno) {
		empservice.deleteEmployee(empno);
	}
}