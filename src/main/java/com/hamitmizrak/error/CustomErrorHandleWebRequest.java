package blog.hamitmizrak.error;

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
//@CrossOrigin
//Spring Boot Error and Exception Handling
public class CustomErrorHandleWebRequest implements ErrorController { //

    //Injection
    private final ErrorAttributes errorAttributes;

    //Spring gelen /error yakalayıp custom handler yapıyorum
    // http://localhost:8080/custom/handler
    @RequestMapping("/error")
    ApiResult handleError(WebRequest webRequest) {
         //Spring +2.3
        Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE, ErrorAttributeOptions.Include.BINDING_ERRORS));
        //Map<String,Object> attributes= this.errorAttributes.getErrorAttributes(webRequest,  ErrorAttributeOptions.defaults());
        //ErrorAttributeOptions options = ErrorAttributeOptions.defaults().including(ErrorAttributeOptions.Include.MESSAGE);
        // Map<String,Object> attributes= this.errorAttributes.getErrorAttributes(webRequest, options);
        //Map<String,Object> attributes= this.errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE));
        int status = (Integer) attributes.get("status");
        String message = (String) attributes.get("message");
        String path = (String) attributes.get("path");
        ApiResult error = new ApiResult(status, message, path);

        Map<String, String> hata = new HashMap<>();
        String errorAtributes2 = (String) attributes.get("error");
        hata.put("error", errorAtributes2);
        error.setValidationErrors(hata);

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
