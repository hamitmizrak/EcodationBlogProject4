package com.hamitmizrak.business.service;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.data.entity.EmployeeEntity;

import java.util.List;
import java.util.Map;

public interface IEmployeeService {

    //model mapper
    public EmployeeDto entityToDto(EmployeeEntity employeeEntity);
    public EmployeeEntity dtoToEntity(EmployeeDto employeeDto);

    //save
    public EmployeeDto createEmployee(EmployeeDto employeeDto);

    //list
    public List<EmployeeDto> getAllEmployees();

    //find
    public EmployeeDto getEmployeeById(Long id);

    //delete
    public Map<String,Boolean>  deleteEmployee(Long id);

    //update
    public EmployeeDto updateEmployee(Long id,EmployeeDto employeeDto);

}
