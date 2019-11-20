import React from 'react'
import icon from './img.png'
import './error-indicaror.css'

const ErrorIndicator = () =>{

    return (
        <div className='error-indicator'>
            <h3>An error occurred</h3>
            <h4> But we sent knight to fix this</h4>
            <img src={icon} alt="icon"/>

        </div>
    )
};
export default ErrorIndicator