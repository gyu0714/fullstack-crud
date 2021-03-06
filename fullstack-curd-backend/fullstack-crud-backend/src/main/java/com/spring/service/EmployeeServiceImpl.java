package com.spring.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mapper.EmployeeMapper;
import com.spring.model.EmployeeDTO;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeMapper empMapper;

	// 모든 employee 조회
	@Override
	public List<EmployeeDTO> getAllEmployees() {
		return empMapper.getAllEmployees();
	}

	// empno로 employee 조회
	@Override
	public EmployeeDTO getEmployeeByEmpno(int empno) {
		return empMapper.getEmployeeByEmpno(empno);
	}

	// employee 추가
	@Override
	public void insertEmployee(EmployeeDTO employee) {
		empMapper.insertEmployee(employee);
	}

	// employee 수정
	@Override
	public void updateEmployee(EmployeeDTO employee) {
		empMapper.updateEmployee(employee);
	}

	// empno 값으로 employee 삭제
	@Override
	public void deleteEmployee(int empno) {
		empMapper.deleteEmployee(empno);
	}

}