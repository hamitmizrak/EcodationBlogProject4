package com.hamitmizrak.data.entity;

import com.hamitmizrak.data.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


//lombok
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

//Entity
@Entity
@Table(name = "employee")
public class EmployeeEntity extends BaseEntity implements Serializable {
    //serileştirme
    public static final long serialVersionUID = 1L;

    private String username;
    private String email;
    private String password;
    private double price;
}
