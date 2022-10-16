//stateless (durumsuz) => function component
//rfc =>TAB
//function component: props için parametre olarak vermeliyiz.
//function component: props için this kullanma !!!!
import React from 'react'

export default function EmployeeCreateInput(props) {
    //descructing
    const { label, type, name, id, placeholder, onChangeInput, focus, value } = props;
    //return
    return (
        <>
            <div className="form-group">
                <label htmlFor="">{label}</label>
                <input type={type} className="form-control" placeholder={placeholder}
                    name={name} id={id} value={value} onChange={onChangeInput} focus={focus}></input>
            </div>
        </>
    ) //end return
} //end function EmployeeCreateInput
