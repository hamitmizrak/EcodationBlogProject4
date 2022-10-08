package com.hamitmizrak.bean;

import com.hamitmizrak.audit.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

@Configuration
public class AuditorAwareBean {

     /*
    Dikkat
    @SpringBootApplication ==>@EnableJpaAuditing(auditorAwareRef = "AuditorAwareBean")
    */
    @Bean
    public AuditorAware auditorAwareMethod(){
        return new AuditorAwareImpl();
    }
}
