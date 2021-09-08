import React from 'react';
import {Link} from "react-router-dom";

function ForgetPasswordInformation() {
    return (
        <div className="forget-password-information">
            <div className="forget-password-nav">
                <Link to="/"><img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png"/></Link>
            </div>
            <div className="forget-password-body">
                <div className="forget-password-body-content" style={{top:"100%"}}>
                    <h1>ROJGAR.COM</h1>
                    <h4>Password Reset Link Send Successfully.</h4>
                    <h4>Pleas Kindly Check Your Email</h4>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordInformation
