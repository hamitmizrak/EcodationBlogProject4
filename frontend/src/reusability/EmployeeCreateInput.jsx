//stateless (durumsuz) => function component
//rfc =>TAB
//function component: props için parametre olarak vermeliyiz.
//function component: props için this kullanma !!!!
import React from 'react'


export default function EmployeeCreateInput(props) {
    //descructing
    const { label, type, name, id, placeholder, onChangeInput, focus, value,error } = props;
     //daha sade örünmesini sağladım
     const className = name ? "is-invalid form-control mb-3" : "form-control mb-3";
    //return
    return (
        <>
            <div className="form-group">
                <label htmlFor="">{label}</label>
                <input type={type} id={id} name={name} className={className} placeholder={placeholder}
                      value={value} onChange={onChangeInput} focus={focus}/>
                <div className="invalid-feedback">{error}</div>
            </div>

        </>
    ) //end return
} //end function EmployeeCreateInput
