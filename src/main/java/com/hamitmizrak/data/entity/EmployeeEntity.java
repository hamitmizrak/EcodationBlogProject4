package com.hamitmizrak.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

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

    private String name;
    private String surname;
    private double price;

}
