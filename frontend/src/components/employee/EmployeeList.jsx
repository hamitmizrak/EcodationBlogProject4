import React, { Component } from 'react'
import EmployeeServices from '../../services/EmployeeServices';

    {/* 
private Long id;
private String username;
private String email;
private String password;
private double price; 
*/}

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    //state 
    this.state={
      employees:[],
    };

    //bind

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
  }//end componentDidMount

  // göstermek
  render() {
    return (
      <>
        <h1 className="text-center text-uppercase">Müşteri Listesi</h1>
 
        <div className="row">
          <div className="mx-auto"><button className="btn btn-primary">EKLEME</button></div>
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
              
              <td><button><i className="fa-solid fa-pen-to-square text-primary"></i></button></td>
              <td><button><i className="fa-solid fa-mountain-sun text-success"></i></button></td>
              <td><button><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            )
            }
          </tbody>
        </table>
      </>
    )
  } //end render
}//end class EmployeeList
