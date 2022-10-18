package com.hamitmizrak.error;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//lombok
@RequiredArgsConstructor
@Log4j2

//SpringBoot defaultta gelen dışında kendi ErrorController yazalım
@RestController
@CrossOrigin
//Spring Boot Error and Exception Handling
public class CustomErrorHandleWebRequest implements ErrorController { //


    //1.YOL BAD REQUEST
    // Exception handling : 400
    // eğer input validation işlemi olursa buradaki metot devreye girecek
    // Eğer MethodArgumentNotValidException istisna meydana gelirse bu istisnayı yakalasın
 /*  @ExceptionHandler(MethodArgumentNotValidException.class)
    //400 göndersin yazmazsak spring 200 döner
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResult handleValidationException(MethodArgumentNotValidException exception) {
        ApiResult error = new ApiResult(400, "Validation error888", PATH);
        Map<String, String> validationErrors = new HashMap<>();
        for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());    }
        error.setValidationErrors(validationErrors);
        return error;
    }*/

    //2.YOL BAD REQUEST
    //Injection
    private final ErrorAttributes errorAttributes;

    //Spring gelen /error yakalayıp custom handler yapıyorum
    // http://localhost:8080/custom/handler
    @RequestMapping("/error")
    ApiResult handleError(WebRequest webRequest) {
         //Spring +2.3
        Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE, ErrorAttributeOptions.Include.BINDING_ERRORS));
        int status = (Integer) attributes.get("status");
        String message = (String) attributes.get("message");
        String path = (String) attributes.get("path");
        ApiResult error = new ApiResult(status, message, path);

        //attribute errors varsa
        if (attributes.containsKey("errors")) {
            //@SuppressWarnings("unchecked")
            List<FieldError> fieldErrors = (List<FieldError>) attributes.get("errors");
            Map<String, String> validationMistake = new HashMap<>();
            for (FieldError fieldError : fieldErrors) {
                validationMistake.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            error.setValidationErrors(validationMistake);
        }
        return error;
    }
}
