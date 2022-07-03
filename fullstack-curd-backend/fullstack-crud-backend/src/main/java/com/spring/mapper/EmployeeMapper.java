package com.spring.mapper;

import java.util.List;

import com.spring.model.EmployeeDTO;

public interface EmployeeMapper {

	// 모든 employee 조회
	public List<EmployeeDTO> getAllEmployees();
	
	// empno로 employee 조회
	public EmployeeDTO getEmployeeByEmpno(int empno);
	
	// employee 추가
	public void insertEmployee(EmployeeDTO employee);
	
	// employee 수정
	public void updateEmployee(EmployeeDTO employee);
	
	// empno 값으로 employee 삭제
	public void deleteEmployee(int empno);
}