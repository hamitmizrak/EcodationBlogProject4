package com.hamitmizrak.bean;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.impl.EmployeeServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

//bu project deployment olduğunda  tane veri eklensin
@Configuration
public class EmployeeSpeedData {

    @Bean
    CommandLineRunner createEmployeeData(EmployeeServiceImpl service){

        return (args)->{
            for (int i =1 ; i <=5 ; i++) {
                UUID uuid=UUID.randomUUID();
                EmployeeDto employeeDto=EmployeeDto.builder()
                        .email(uuid+"@gmail.com")
                        .password("root"+i)
                        .username("Hamit Mızrak"+i)
                        .price(10*i)
                        .build();
                service.createEmployee(employeeDto);
            }
        };
    }
}
