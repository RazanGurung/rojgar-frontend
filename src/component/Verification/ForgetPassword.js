import React from 'react';
import Validator from './ForgetPasswordValidator';
import useForgetPassword from './useForgetPassword';
import {Link} from "react-router-dom";

function ForgetPassword() {
    const { handleChange, handleSubmit, values, errors } = useForgetPassword(
        Validator
    );
    return (
        <div className="forget-password-container">
            <div className="forget-password-nav">
                <Link to="/"><img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png"/></Link>
            </div>
            <div className="forget-password-body">
                <div className="forget-password-body-content">
                    <h1>ROJGAR.COM</h1>
                    <h4>We will send password reset link to your email address.</h4>
                    <input placeholder="Enter Email Address" className="form-control" type="email" id="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    <button onClick={handleSubmit} className="btn" style={{height:"40px",width:"400px"}}>Send Link</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
