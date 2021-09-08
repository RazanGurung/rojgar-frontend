import React, {useState} from 'react';
import {Form,FormGroup, Button, FormLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../css/registration.css'
import useSignup from "./useSignup";
import Validator from './Signupvalidator';

const gendertype = [
    {
        label :  "Choose__Gender",
    },
    {
        label :  "Male",
        value : "male"
    },
    {
        label : "Female",
        value : "female"
    },
    {
        label : "Others",
        value : "others"
    }
]

const usertype = [
    {
        label :  "Choose__User-Type",
    },
    {
        label : "User",
        value : "user"
    },
    {
        label : "Professional",
        value : "professional"
    }
]

function Registration(){
    const { handleChange, handleSubmit, values, errors } = useSignup(
        Validator
      );
    return (
        <div className="register">
            <h1>Get Your Free Account</h1>
            <Form  className = "register__form" noValidate>
                <FormGroup>
                    <div className="register__name">
                        <div className="register__option">
                            <FormLabel className="register__label">FirstName</FormLabel>
                            <input className="form-control" name="firstname" id="firstname" type="text" placeholder="FirstName" value = {values.firstname} onChange={handleChange}/> 
                            {errors.firstname && <p>{errors.firstname}</p>}
                        </div>
                        <div className="register__option">
                            <FormLabel className="register__label">LastName</FormLabel>
                            <input className="form-control" name="lastname" id="lastname" type="text" placeholder="LastName" value = {values.lastname} onChange={handleChange} />
                            {errors.lastname && <p>{errors.lastname}</p>}
                        </div>
                    </div>
                    <FormLabel className="register__label">Email</FormLabel>
                    <input className="form-control" name="email" id="email" type="email" placeholder="email" value = {values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                    <div className="register__name">
                        <div className="register__option">
                            <FormLabel className="register__label">User-Type</FormLabel>
                            <select className="form-control" name="usertype"  id="usertype" value={values.usertype} onChange={handleChange} >
                                {usertype.map((user)=>(
                                    <option value={user.value}>{user.label}</option>
                                ))}
                            </select>
                            {errors.usertype && <p>{errors.usertype}</p>}
                        </div>
                        <div className="register__option">
                            <FormLabel className="register__label">Gender</FormLabel>
                            <select className="form-control" name="gender" placeholder="Select Gender" id="gender" value={values.gender} onChange={handleChange} >
                                {gendertype.map((gender)=>(
                                    <option value={gender.value}>{gender.label}</option>
                                ))}
                            </select>
                            {errors.gender && <p>{errors.gender}</p>}
                        </div>
                    </div>
                    <FormLabel className="register__label">Phone No.</FormLabel>
                    <input className="form-control" name="phone" id="phone" type="number" placeholder="Mobile Number" value = {values.phone}onChange={handleChange} />
                    {errors.phone && <p>{errors.phone}</p>}
                    <FormLabel className="register__label">Password</FormLabel>
                    <input className="form-control" name="password" id ="password" type="password" placeholder="Password" value = {values.password}onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                    <FormLabel className="register__label">Confirm Password</FormLabel>
                    <input className="form-control" name="password2" type="password" placeholder="Confirm Password" value = {values.password2}onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                </FormGroup>
                <Button className ="register__button btn-lg btn-block" id= "submit" onClick={handleSubmit}>Register</Button>
                <div className="account-check">Already have an account? <Link to="/login" className="account-check-login">Login</Link></div>
            </Form>
        </div>
    )
}


export default Registration;
