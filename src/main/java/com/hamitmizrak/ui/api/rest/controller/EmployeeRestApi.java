package com.hamitmizrak.ui.api.rest.controller;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.IEmployeeService;
import com.hamitmizrak.error.ApiResult;
import com.hamitmizrak.ui.api.rest.IEmployeeApiRest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//lombok
@Log4j2
//Service => constructor injection(3.YOL)
@RequiredArgsConstructor

//rest
@RestController
@RequestMapping("/employee/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
//dış dünyaya açılan kapımız
public class EmployeeRestApi implements IEmployeeApiRest {

    private final static String PATH="/employee/api/v1/employees";

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


    // Exception handling : 400
    // eğer input validation işlemi olursa buradaki metot devreye girecek
    // Eğer MethodArgumentNotValidException istisna meydana gelirse bu istisnayı yakalasın
 /*  @ExceptionHandler(MethodArgumentNotValidException.class)
    //400 göndersin yazmazsak spring 200 döner
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResult handleValidationException(MethodArgumentNotValidException exception) {
        ApiResult error = new ApiResult(400, "Validation error888", PATH);
        Map<String, String> validationErrors = new HashMap<>();
        for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());    }
        error.setValidationErrors(validationErrors);
        return error;
    }*/

    //SAVE
    //http://localhost:8080/employee/api/v1/employees
    @Override
    @PostMapping("/employees")
    public ResponseEntity<?> createEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
        service.createEmployee(employeeDto);
        //int status, String path, String message
        ApiResult apiResult=new ApiResult(200,PATH,"created Employee");
        //return ResponseEntity.ok(employeeDto);
        return ResponseEntity.ok(apiResult);
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
    public ResponseEntity<EmployeeDto> updateEmployee(@Valid @PathVariable(name="id") Long id, @RequestBody EmployeeDto employeeDto) {
        service.updateEmployee(id,employeeDto);
        return ResponseEntity.ok(employeeDto);
    }
}
