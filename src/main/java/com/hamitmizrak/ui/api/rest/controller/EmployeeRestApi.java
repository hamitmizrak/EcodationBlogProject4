package com.hamitmizrak.ui.api.rest.controller;


import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.IEmployeeService;
import com.hamitmizrak.ui.api.rest.IEmployeeApiRest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//lombok
@Log4j2
//Service => constructor injection(3.YOL)
@RequiredArgsConstructor

//dış dünyaya açılan kapımız
@RestController
@RequestMapping("/employee/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeRestApi implements IEmployeeApiRest {

    //injection (3.YOL)
    //Service => field injection(1.YOL)
    //@Autowired
    //IEmployeeService  service;

    //Service => constructor injection(2.YOL)
    //IEmployeeService service;

    //Dikkat: 1 tane field için @Autowired yazmayabilirsin
    //@Autowired
    //public EmployeeRestApi(IEmployeeService service) {
    //   this.service = service;
    //}

    //Service => @RequiredArgsConstructor constructor injection(3.YOL)
    private final IEmployeeService service;

    //Speed Data
    //http://localhost:8080/employee/api/v1
    //http://localhost:8080/employee/api/v1/index
    @Override
    @GetMapping({"/","/index"})
    public String getRoot() {
        return "index";
    }

    //SAVE
    //http://localhost:8080/employee/api/v1/employees
    @Override
    @PostMapping("/employees")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        service.createEmployee(employeeDto);
        return ResponseEntity.ok(employeeDto);
    }

    //LIST
    //http://localhost:8080/employee/api/v1/employees
    @Override
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
      List<EmployeeDto> list=  service.getAllEmployees();
        return ResponseEntity.ok(list);
    }

    //FIND
    //http://localhost:8080/employee/api/v1/employees/1
    @Override
    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable(name="id")  Long id) {
        return ResponseEntity.ok(service.getEmployeeById(id));
    }

    //DELETE
    //http://localhost:8080/employee/api/v1/employees/1
    @Override
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable(name="id")  Long id) {
        service.deleteEmployee(id);
        Map<String,Boolean> response=new HashMap<>();
        response.put("silindi",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //UPDATE
    //http://localhost:8080/employee/api/v1/employees/1
    @Override
    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable(name="id") Long id, @RequestBody EmployeeDto employeeDto) {
        service.updateEmployee(id,employeeDto);
        return ResponseEntity.ok(employeeDto);
    }
}
