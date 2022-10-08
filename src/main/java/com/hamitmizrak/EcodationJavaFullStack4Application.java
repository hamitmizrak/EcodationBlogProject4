package com.hamitmizrak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


//Auditor
@EnableJpaAuditing(auditorAwareRef = "AuditorAwareBean")

@SpringBootApplication
public class EcodationJavaFullStack4Application {

    public static void main(String[] args) {
        System.setProperty("spring.devtools.restart.enabled","true");
        System.setProperty("java.awt.headless", "false"); //Disables headless
        SpringApplication.run(EcodationJavaFullStack4Application.class, args);
    }
}
