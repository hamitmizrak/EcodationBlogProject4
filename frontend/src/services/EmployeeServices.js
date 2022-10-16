// javadan gelen (api) verileri bu yolla taşıyacağız.

//axios import added
import axios from "axios";

//sabit URL
//http://localhost:8080/employee/api/v1/employees
const EMPLOYEE_URL = "/employee/api/v1/employees";

//class
class EmployeeServices {


    //Header Flags(i18n data)
    otherLanguageServices(language) {
        axios.defaults.headers['accept-language'] = language;
    }


    //SAVE 
    //POST =>  http://localhost:8080/employee/api/v1/employees
    createEmployee(employeeDto) {
        //URL,BODY
        return axios.post(EMPLOYEE_URL, employeeDto);
    }

    //LIST
    //GET => http://localhost:8080/employee/api/v1/employees
    getAllEmployees() {
        return axios.get(EMPLOYEE_URL);
    }

    //FIND
    //GET => http://localhost:8080/employee/api/v1/employees/1
    getEmployeeById(id) {
        return axios.get(EMPLOYEE_URL + "/" + id);
    }

    //DELETE
    //DELETE => http://localhost:8080/employee/api/v1/employees/1
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_URL + "/" + id);
    }

    //UPDATE
    //PUT => http://localhost:8080/employee/api/v1/employees/1
    updateEmployee(id, employeeDto) {
        return axios.put(EMPLOYEE_URL + "/" + id, employeeDto);
    }
} //end EmployeeServices


export default new EmployeeServices();