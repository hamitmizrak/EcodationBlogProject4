import React, { Component } from 'react';

// EmployeeCreateInput
import EmployeeCreateInput from '../../reusability/EmployeeCreateInput';

//Services: EmployeeServices
import EmployeeServices from "../../services/EmployeeServices";

//Dil secenegi import edildi
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
            apiResultError: {}
        }
        //bind
        this.homePage = this.homePage.bind(this);
        this.titleDynamicsSaveOrUpdate = this.titleDynamicsSaveOrUpdate.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);

        this.internationalizationLanguage = this.internationalizationLanguage.bind(this);
    }

    internationalizationLanguage = language => {
        //destructing (ES6)
        const { i18n } = this.props;
        i18n.changeLanguage(language);

        //EmployeeServices
        EmployeeServices.otherLanguageServices(language);
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

    // internationalizationLanguage arrow function Flags


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
                if (error.response.data.validation) {
                    this.setState({ apiResultError: console.error.response.data.validation })
                }
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
                if (error.response.data.validation) {
                    this.setState({ apiResultError: console.error.response.data.validation })
                }
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
        const { submitSpinner, apiResultError } = this.state;
        const { username, email, password, price } = apiResultError
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
                                onChangeInput={this.onChangeUserName} error={username} />

                            {/*email*/}
                            <EmployeeCreateInput type="email" placeholder="Müşteri Kullanıcı Email"
                                name="email" id="email" label={this.props.t('email')} focus="false" value={this.state.email}
                                onChangeInput={this.onChangeEmail} error={email} />

                            {/*password*/}
                            <EmployeeCreateInput type="password" placeholder="Müşteri Kullanıcı Şifresi"
                                name="password" id="password" label={this.props.t('password')} focus="false" value={this.state.password}
                                onChangeInput={this.onChangePassword} error={password} />

                            {/*price*/}
                            <EmployeeCreateInput type="number" placeholder="Müşteri Kullanıcı numara"
                                name="price" id="price" label={this.props.t('price')} focus="false" value={this.state.price}
                                onChangeInput={this.onChangePrice} error={price} />

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

                            <div className="container">
                                <img src="tr.png" alt="TR" onClick={() => this.internationalizationLanguage('tr')} />
                                <img src="en.png" alt="EN" onClick={() => this.internationalizationLanguage('en')} />
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

// flag click
// Error face