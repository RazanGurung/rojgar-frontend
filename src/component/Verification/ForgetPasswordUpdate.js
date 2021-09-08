import axios from 'axios';
import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Form, FormGroup, FormLabel, Button} from "react-bootstrap";
import Validator from './UpdatePasswordValidator';
import useUpdatePassword from './useUpdatePassword';

function ForgetPasswordUpdate() {
    const params = useParams();
    const token = params.token;
    const { handleChange, handleSubmit, values, errors } = useUpdatePassword(
        Validator,token
    );

    return (
    <div className="update-password">
        <h1 style={{marginBottom:"30px"}}>Reset Your Password</h1>
        <Form className = "login__form" noValidate>
            <FormLabel className="register__label">Password</FormLabel>
            <input className="form-control" name="password" id ="password" type="password" placeholder="Password" value = {values.password}onChange={handleChange} />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <FormLabel className="register__label">Confirm Password</FormLabel>
            <input className="form-control" name="password2" type="password" placeholder="Confirm Password" value = {values.password2}onChange={handleChange} />
            {errors.password2 && <p style={{color:"red"}}>{errors.password2}</p>}
            <Button style={{marginTop:"15px"}} className ="btn-lg btn-block login__button" onClick={handleSubmit}>Reset Password</Button>
        </Form>
    </div>
    )
}

export default ForgetPasswordUpdate
