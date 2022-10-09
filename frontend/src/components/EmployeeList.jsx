import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

    //state 
    this.state={
      employees:[],
    };

  }//end constructor

  //CDM
  componentDidMount() {
    EmployeeServices.getAllEmployees().then(
      (response)=>{
        this.setState({
          employees:response.data
        })
      }
    );
  }
  

  // göstermek
  render() {
    return (
      <>
        <h1 className="text-center text-uppercase">Müşteri Listesi</h1>
        {/* 
    private Long id;
    private String username;
    private String email;
    private String password;
    private double price; 
    */}
        <div className="row">
          <div className="mx-auto"><button className="btn btn-primary">EKLEME</button></div>
        </div>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
              <th>PRICE</th>
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
              <td>{employees.password}</td>
              <td>{employees.price}</td>
              <td><button><i className="fa-solid fa-pen-to-square"></i></button></td>
              <td><button><i class="fa-solid fa-mountain-sun"></i></button></td>
              <td><button><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            )
            }
          </tbody>
        </table>
        {/* 
    private Long id;
    private String username;
    private String email;
    private String password;
    private double price; 
    */}
      </>
    )
  }
}
