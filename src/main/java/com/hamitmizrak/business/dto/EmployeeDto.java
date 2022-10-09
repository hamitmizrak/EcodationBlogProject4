package com.hamitmizrak.business.dto;

import com.hamitmizrak.annotation.EmployeeUniqueEmail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

//lombok
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Log4j2

public class EmployeeDto {
    private Long id;


    @NotNull(message="{hamit.username.validation.constraints.NotNull.message}")
    private String username;

    @NotNull(message="{hamit.email.validation.constraints.NotNull.message}")
    @Email
    @Size(max=200)
    //kendi Annotation yazalım
    @EmployeeUniqueEmail
    private String email;

    @NotNull(message="{hamit.password.validation.constraints.NotNull.message}")
    @Size(min = 7,max=200)
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).*$",message = "{hamit.password.pattern.validation.constraints.NotNull.message}")
    private String password;

    private double price;
}
