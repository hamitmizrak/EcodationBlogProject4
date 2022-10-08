package com.hamitmizrak.ui.api.rest;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.error.ApiResult;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IEmployeeApiRest {

    //speed data
    public String getRoot();

    //save
    public ResponseEntity<ApiResult>  createEmployee(EmployeeDto employeeDto);

    //list
    public ResponseEntity<List<EmployeeDto>>  getAllEmployees();

    //find
    public ResponseEntity<EmployeeDto>  getEmployeeById(Long id);

    //delete
    public ResponseEntity<Map<String,Boolean>>  deleteEmployee(Long id);

    //update
    public ResponseEntity<EmployeeDto>  updateEmployee(Long id,EmployeeDto employeeDto);
}
