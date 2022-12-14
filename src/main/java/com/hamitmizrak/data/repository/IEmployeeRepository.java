package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.EmployeeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends CrudRepository<EmployeeEntity,Long> {

    //delivered query
    EmployeeEntity findByEmail(String email);
}
