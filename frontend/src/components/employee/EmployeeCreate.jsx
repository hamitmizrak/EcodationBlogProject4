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
            price: "",
            submitSpinner: false,

        }
        //bind
        this.homePage = this.homePage.bind(this);
        this.titleDynamicsSaveOrUpdate = this.titleDynamicsSaveOrUpdate.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
    } //end  constructor


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
            return <h4 className="display-3 text-center mt-5">{this.props.t('customerAdd')}</h4>
        else
            return <h4 className="display-3 text-center mt-5">{this.props.t('customerUpdate')}</h4>
    }

    //Kaydetme veya Güncelleme
    saveOrUpdateEmployee = (event) => {
        //browser bir yere göndermesin
        event.preventDefault();
        //employee objesini doldurmak
        const { username, email, password, price } = this.state;
        let employee = {
            username,
            email,
            password,
            price
        }
        //alert(employee.username + " " + employee.email + employee.password + employee.price)

        //spinner
        this.setState({ submitSpinner: true })

        //EKLEME
        if (this.state.id === "_add") {
            EmployeeServices.createEmployee(employee).then((response) => {
                    this.setState({ submitSpinner: false })
                    this.props.history.push('/employees')
                    alert("Ekledi")
                }
            ).catch(error => {
                this.setState({ submitSpinner: false })
                console.log(error.response.data)
            });

        } else { //GÜNCELLEME
            EmployeeServices.updateEmployee(this.state.id, employee).then(response => {
                    this.setState({ submitSpinner: false })
                    this.props.history.push('/employees')
                    alert("Güncelle")
                }
            ).catch(error => {
                this.setState({ submitSpinner: false })
                console.log(error.response.data)
            });
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
        const { submitSpinner} = this.state;
        return (
            <>
                {/*Home page*/}
                <div className="mx-auto">
                    <button className="btn btn-primary mb-4" onClick={this.homePage}>Listele</button>
                </div>
                <div className="container">
                    <div className="row">
                        <form >
                            {this.titleDynamicsSaveOrUpdate()}
                            <div className="card-body">
                                {/*username*/}
                                <EmployeeCreateInput type="text" placeholder={this.props.t('username')}
                                                     name="username" id="username" label={this.props.t('username')} focus="true" value={this.state.username}
                                                     onChangeInput={this.onChangeUserName}  />

                                {/*email*/}
                                <EmployeeCreateInput type="email" placeholder={this.props.t('email')}
                                                     name="email" id="email" label={this.props.t('email')} focus="false" value={this.state.email}
                                                     onChangeInput={this.onChangeEmail}  />

                                {/*password*/}
                                <EmployeeCreateInput type="password" placeholder={this.props.t('password')}
                                                     name="password" id="password" label={this.props.t('password')} focus="false" value={this.state.password}
                                                     onChangeInput={this.onChangePassword}  />

                                {/*price*/}
                                <EmployeeCreateInput type="number" placeholder={this.props.t('price')}
                                                     name="price" id="price" label={this.props.t('price')} focus="false" value={this.state.price}
                                                     onChangeInput={this.onChangePrice}  />

                                {/*Button*/}
                                <div className="mt-3 mb-3 d-inline">
                                    <button type="reset" className="btn btn-danger" onClick={this.cancel.bind(this)}>Temizle</button>
                                    <button type="submit" className="btn btn-primary" onClick={this.saveOrUpdateEmployee}>

                                        {submitSpinner ? <div className="spinner-border text-warning" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> : ""}
                                        Gönder
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

// export default UserRegister
//  Higher Order Component: monad componenti başka bir componentin içine  ekleyip oradanda yeni sonuclar elde etmek
export default withTranslation()(EmployeeCreate)


// flag click
// Error face