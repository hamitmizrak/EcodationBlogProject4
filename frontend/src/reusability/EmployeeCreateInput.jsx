//stateless (durumsuz) => function component
//rfc =>TAB
//function component: props için parametre olarak vermeliyiz.
//function component: props için this kullanma !!!!
import React from 'react'
import OtherLanguage from "../i18n/OtherLanguage";

export default function EmployeeCreateInput(props) {
    //descructing
    const { label, type, name, id, placeholder, onChangeInput, focus, value,error } = props;
    //return
    return (
        <>
            <div className="form-group">
                <label htmlFor="">{label}</label>
                <input type={type} className="form-control mb-3" placeholder={placeholder}
                    name={name} id={id} value={value} onChange={onChangeInput} focus={focus}></input>
                    <div className='invalid-feedback'>{error}</div>
            </div>

        </>
    ) //end return
} //end function EmployeeCreateInput
