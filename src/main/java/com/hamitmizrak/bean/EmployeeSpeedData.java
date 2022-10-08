package com.hamitmizrak.bean;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.service.impl.EmployeeServiceImpl;
import com.hamitmizrak.data.entity.EmployeeEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

//lombok
@RequiredArgsConstructor

//bu project deployment olduğunda  tane veri eklensin
@Configuration
public class EmployeeSpeedData {

    //Constructor injection
    private final PasswordEncoderBean passwordEncoderBean;

    @Bean
    CommandLineRunner createEmployeeData(EmployeeServiceImpl service){

        return (args)->{
            for (int i =1 ; i <=5 ; i++) {
                UUID uuid=UUID.randomUUID();
                EmployeeDto employeeDto=EmployeeDto.builder()
                        .email(uuid+"@gmail.com")
                        .password(passwordEncoderBean.passwordEncoderMethod().encode("root"+i))
                        .username("Hamit Mızrak"+i)
                        .price(10*i)
                        .build();
                service.createEmployee(employeeDto);
            }
        };
    }
}
