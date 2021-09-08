import React from 'react';
import { Form, FormCheck,FormGroup, Button, FormLabel } from "react-bootstrap";
import {GoogleLoginButton} from "react-social-login-buttons";
import {Link} from "react-router-dom";
import '../../css/login.css';
import Validator from './Loginvalidator';
import useLogin from './useLogin';

function Login() {
    const { handleChange, handleSubmit, values, errors } = useLogin(
        Validator
    );
  return (
    <div className="login">
        <h1>Login to Your Account</h1>
        <Form className = "login__form" noValidate>
            <FormGroup>
                <FormLabel className="login__label">Email</FormLabel>
                <input className="form-control" type="email" id="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <FormLabel className="login__label">Password</FormLabel>
                <input className="form-control" type="password" placeholder="Password" name="password" id="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <FormCheck >
                    <input type="checkbox" className="login__checkbox"/>
                    <FormLabel className="form-check-label login__label" >Remember Me</FormLabel> 
                </FormCheck>   
            </FormGroup>
            <Button className ="btn-lg btn-block login__button" onClick={handleSubmit}>Login</Button>
            <div className="social-label">Or Continue with your social account</div>
            <GoogleLoginButton className="mt-3 mb-3" />
            <div className="text-center">
                <Link to="/signup" className="social-label">Sign up</Link>
                <span className="social-label">|</span>
                <Link to="/forget/password" className="social-label">Forget Password?</Link>
            </div>
        </Form>
    </div>
  )
}

export default Login
