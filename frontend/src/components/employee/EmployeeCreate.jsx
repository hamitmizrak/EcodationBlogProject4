import React, { Component } from 'react';

// EmployeeCreateInput
import EmployeeCreateInput from '../../reusability/EmployeeCreateInput';

//Services: EmployeeServices
import EmployeeServices from "../../services/EmployeeServices";

// Dil secenegi
import { withTranslation } from 'react-i18next';

// class EmployeeCreate
class EmployeeCreate extends Component {
    //constructor
    constructor(props) {
        super(props);
        //state
        this.state = {
            id: this.props.match.params.id,
            username: "",
            email: "",
            password: "",
            price: ""
        }
        //bind
        this.homePage = this.homePage.bind(this);
        this.titleDynamicsSaveOrUpdate = this.titleDynamicsSaveOrUpdate.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
    }

    //CDM
    componentDidMount() {
        //EKLEME
        if (this.state.id === "_add") {
            return;
        } else {
            EmployeeServices.getEmployeeById(this.state.id).then(
                response => {
                    let employee = response.data;
                    console.log(employee)
                    this.setState({
                        username: employee.username,
                        email: employee.email,
                        password: employee.password,
                        price: employee.price,
                    }) //end setState
                }//end response
            ) //end EmployeeServices
        } //end else
    } //end componentDidMount

    //HOMEPAGE
    homePage() {
        this.props.history.push("/")
    }

    //CANCEL
    cancel() {
        this.props.history.push('/employees')
    }

    //Header Ekleme veya güncelleme
    titleDynamicsSaveOrUpdate() {
        if (this.state.id === "_add")
            return <h1 className="display-3 text-center mt-5">Müşteri Ekle</h1>
        else
            return <h1 className="display-3 text-center mt-5">Müşteri Güncelle</h1>
    }

    //Kaydetme veya Güncelleme
    saveOrUpdateEmployee = (event) => {
        //browser bir yere göndermesin
        event.preventDefault();
        //employee objesini doldurmak
        let employee = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            price: this.state.price,
        }
        alert(employee.username + " " + employee.email + employee.password + employee.price)
        //EKLEME
        if (this.state.id === "_add") {
            EmployeeServices.createEmployee(employee).then(
                response => {
                    this.props.history.push('/employees')
                    alert("Ekledi")
                }
            );
        } else { //GÜNCELLEME
            EmployeeServices.updateEmployee(this.state.id, employee).then(
                response => {
                    this.props.history.push('/employees')
                    alert("Güncelle")
                }
            )
        }
    }

    //username
    onChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    //email
    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    //password
    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    //price
    onChangePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }


    //RENDER
    render() {
        return (
            <>
                {this.titleDynamicsSaveOrUpdate()}
                {/*Home page*/}
                <div className="mx-auto">
                    <button className="btn btn-primary mb-4" onClick={this.homePage}>Listele</button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-body">

                            {/*username*/}
                            <EmployeeCreateInput type="text" placeholder="Müşteri Kullanıcı Adı"
                                name="username" id="username" label={this.props.t('username')} focus="true" value={this.state.username}
                                onChangeInput={this.onChangeUserName} />

                            {/*email*/}
                            <EmployeeCreateInput type="email" placeholder="Müşteri Kullanıcı Email"
                                name="email" id="email" label={this.props.t('email')} focus="false" value={this.state.email}
                                onChangeInput={this.onChangeEmail} />

                            {/*password*/}
                            <EmployeeCreateInput type="password" placeholder="Müşteri Kullanıcı Şifresi"
                                name="password" id="password" label={this.props.t('password')} focus="false" value={this.state.password}
                                onChangeInput={this.onChangePassword} />

                            {/*price*/}
                            <EmployeeCreateInput type="number" placeholder="Müşteri Kullanıcı numara"
                                name="price" id="price" label={this.props.t('price')} focus="false" value={this.state.price}
                                onChangeInput={this.onChangePrice} />

                            {/*Button*/}
                            <div className="mt-3 mb-3 d-inline">
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Temizle</button>
                                <button className="btn btn-primary" onClick={this.saveOrUpdateEmployee}>Gönder</button>
                            </div>
                            {/*i18n added*/}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withTranslation()(EmployeeCreate)