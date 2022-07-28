import React from 'react'
import Button from "./Button";

function Button({className,buttonLabel}){
    return <button className={className}>{buttonLabel}</button>;

}

export default Button;
