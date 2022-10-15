import React, {Component} from 'react'
import EmployeeServices from '../../services/EmployeeServices';

{/*
private Long id;
private String username;
private String email;
private String password;
private double price; 
*/
}

export default class EmployeeList extends Component {
    //constructor
    constructor(props) {
        super(props);
        //state
        this.state = {
            employees: [],
        };
        //bind
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }//end constructor

    //CDM
    componentDidMount() {
        EmployeeServices.getAllEmployees().then(
            (response) => {
                this.setState({
                    employees: response.data
                })
            }
        );
    }//end componentDidMount

    //NOT: ekleme ve güncelleme için tek bir sayfa yapacağım.
    //ADD  => /employee-add/:id
    addEmployee(){
     this.props.history.push('/employee-add/_add')
    }

    //UPDATE  => /employee-add/:id
    editEmployee(id) {
        //backtick: `
        this.props.history.push(`/employee-add/${id}`)
    }

    //VIEW employee-view/:id
    viewEmployee(id) {
        //backtick: `
     this.props.history.push(`employee-view/${id}`)
    }

    //DELETE
    deleteEmployee(id) {
        EmployeeServices.deleteEmployee(id).then(
            response=>{
                this.setState({
                    employees:this.state.employees.filter(
                        employee=>employee.id!=id
                    )//end filter
                })//end setState
            }//end response
        )//end then
    }//end deleteEmployee

    // göstermek
    render() {
        return (
            <>
                <h1 className="text-center text-uppercase mt-5">Müşteri Listesi</h1>
                <div className="row">
                    <div className="mx-auto">
                        <button className="btn btn-primary" onClick={this.addEmployee}>EKLEME</button>
                    </div>
                </div>

                <table className="table table-hover table-striped" id="datalistregisterTable">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PRICE</th>
                        <th>PASSWORD</th>
                        <th>UPDATE</th>
                        <th>VIEW</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(employees =>
                            <tr key={employees.id}>
                                <td>{employees.id}</td>
                                <td>{employees.username}</td>
                                <td>{employees.email}</td>
                                <td>{employees.price}</td>
                                <td>{employees.password}</td>

                                <td>
                                    <button><i className="fa-solid fa-pen-to-square text-primary"
                                               onClick={() => this.editEmployee(employees.id)}></i></button>
                                </td>
                                <td>
                                    <button><i className="fa-solid fa-mountain-sun text-success"
                                               onClick={() => this.viewEmployee(employees.id)}></i></button>
                                </td>
                                <td>
                                    <button><i className="fa-solid fa-trash text-danger" onClick={() => {
                                        if (window.confirm('silmek istiyor musunuz ?'))
                                            this.deleteEmployee(employees.id)
                                    }}></i></button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        )
    } //end render
}//end class EmployeeList
