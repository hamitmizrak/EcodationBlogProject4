package com.hamitmizrak.error;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

//lombok
@Data

//Jackson: Objeyi Json'a çeviriyor.
//@JsonInclude(JsonInclude.Include.NON_NULL) => eğer dönüşte null varsa gösterme
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResult {

    private int status;
    private String path;
    private String message;
    private Map<String,String> validationErrors;
    private String createdDate=nowDate();

    //parametreli cosntructor
    public ApiResult(int status, String path, String message) {
        this.status = status;
        this.path = path;
        this.message = message;
    }

    private String nowDate() {
        Locale locale=new Locale("tr","TR");
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd-MM-yyyy HH:mm:ss",locale);
         return simpleDateFormat.format(new Date());
    }
}
