package com.hamitmizrak.annotation;


import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.Email;
import java.lang.annotation.Documented;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.ElementType.TYPE_USE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;


@Target({  FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = {UniqueEmailValidation.class })
public @interface EmployeeUniqueEmail {

    //bu 3 bileşeni eklemek zorundasınız
    String message() default "{hamit.email.unique.validation.constraints.NotNull.message}";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };
}
