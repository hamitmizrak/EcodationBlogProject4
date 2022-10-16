//stateless (durumsuz) => function component
//rfc =>TAB
//function component: props için parametre olarak vermeliyiz.
//function component: props için this kullanma !!!!
import React from 'react'

//Services
import EmployeeServices from '../services/EmployeeServices';

//Dil secenegi import edildi
import { withTranslation } from 'react-i18next';

// function component ////////////////////////
function OtherLanguage(props) {

    // internationalizationLanguage arrow function Flags
    const internationalizationLanguage = language => {

        //destructing (ES6)
        const { i18n } = props;
        i18n.changeLanguage(language);

        //EmployeeServices
        EmployeeServices.otherLanguageServices(language);
    }

    //return
    return (
        <>
            <div className="container">
                <img src="tr.png" alt="TR" onClick={()=>internationalizationLanguage('tr')} />
                <img src="en.png" alt="EN" onClick={()=>internationalizationLanguage('en')} />
            </div>
        </>
    ) //end return
} //end function OtherLanguage

//Higher Order : Monad Bir component çıktısı başka componentint girdisi
export default withTranslation()(OtherLanguage)
