package com.hamitmizrak.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

//lombok
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2

public class EmployeeDto {
    private Long id;
    private String name;
    private String surname;
    private double price;
}
