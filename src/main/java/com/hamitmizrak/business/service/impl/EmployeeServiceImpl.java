package com.hamitmizrak.business.service.impl;

import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.IEmployeeService;
import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.repository.IEmployeeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

//lombok
@RequiredArgsConstructor
@Log4j2

//Asıl işi yapan katmandır
@Service
@Transactional
public class EmployeeServiceImpl implements IEmployeeService {

    private final IEmployeeRepository repository;
    private final ModelMapperBean modelMapper;

    //Model Mapper (DTO )
    @Override
    public EmployeeDto entityToDto(EmployeeEntity employeeEntity) {
        EmployeeDto employeeDto=modelMapper.modelMapperMethod().map(employeeEntity,EmployeeDto.class);
        return employeeDto;
    }

    //Model Mapper (Entity)
    @Override
    public EmployeeEntity dtoToEntity(EmployeeDto employeeDto) {
        EmployeeEntity employeeEntity=modelMapper.modelMapperMethod().map(employeeDto,EmployeeEntity.class);
        return employeeEntity;
    }

    //CREATE
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        return null;
    }

    //LIST
    @Override
    public List<EmployeeDto> getAllEmployees() {
        return null;
    }

    //FIND
    @Override
    public EmployeeDto getEmployeeById(Long id) {
        return null;
    }

    //UPDATE
    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        return null;
    }

    //DELETE
    @Override
    public Map<String, Boolean> deleteEmployee(Long id) {
        return null;
    }
}
