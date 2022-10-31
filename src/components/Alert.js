import React from 'react';
import PropType from "prop-types";

function Alert(props) {
    const capitalise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (

        props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}: </strong> <strong>{props.alert.msg}</strong>
        </div>

    )
}

export default Alert