package com.hamitmizrak.business.service.impl;

import com.hamitmizrak.bean.ModelMapperBean;
import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.IEmployeeService;
import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.repository.IEmployeeRepository;
import com.hamitmizrak.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//lombok
@RequiredArgsConstructor
@Log4j2

//Asıl işi yapan katmandır
@Service
@Transactional
public class EmployeeServiceImpl implements IEmployeeService {

    //constructor injection
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
    @PostMapping("/save/employee")
    public EmployeeDto createEmployee(@RequestBody EmployeeDto employeeDto) {
        if(employeeDto!=null){
            EmployeeEntity employeeEntity=dtoToEntity(employeeDto);
            repository.save(employeeEntity);
        }
        return employeeDto;
    }

    //LIST
    @Override
    @GetMapping("/list/employee")
    public List<EmployeeDto> getAllEmployees() {
        //entity List (FindAll)
        Iterable<EmployeeEntity> entityList=repository.findAll();
        //dto list
        List<EmployeeDto> dtoList=new ArrayList<>();
        for (EmployeeEntity temp: entityList){
            EmployeeDto employeeDto=entityToDto(temp);
            dtoList.add(employeeDto);
        }
        return dtoList;
    }

    //FIND
    @Override
    @GetMapping("/find/employee/{id}")
    public EmployeeDto getEmployeeById(@PathVariable(name="id") Long id) {
        //find Entity
        EmployeeEntity employeeEntity=repository.findById(id).orElseThrow(()->new ResourceNotFoundException(id+" id bulunamadı"));
        EmployeeDto employeeDto=entityToDto(employeeEntity);
        return employeeDto;
    }

    //DELETE
    @Override
    @DeleteMapping("/delete/employee/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(name="id") Long id) {
        //find Entity
        EmployeeEntity employeeEntity=repository.findById(id).orElseThrow(()->new ResourceNotFoundException(id+" id bulunamadı"));
        //Object delete
        repository.delete(employeeEntity);
        Map<String, Boolean> response=new HashMap<>();
        response.put("silindi",Boolean.TRUE);
        return response;
    }

    //UPDATE
    @Override
    @PutMapping("/update/employee/{id}")
    public EmployeeDto updateEmployee(@PathVariable(name="id") Long id, @RequestBody EmployeeDto employeeDto) {
        //find Entity
        EmployeeEntity employeeEntity=repository.findById(id).orElseThrow(()->new ResourceNotFoundException(id+" id bulunamadı"));
        if(employeeDto!=null){
            employeeEntity.setName(employeeDto.getName());
            employeeEntity.setSurname(employeeDto.getSurname());
            employeeEntity.setPrice(employeeDto.getPrice());
            repository.save(employeeEntity);
        }
        return employeeDto;
    }
}
