import axios from 'axios';
import React, {useState} from 'react';
import { Button, FormLabel } from "react-bootstrap";
import usePasswordUpdate from "./usePasswordUpdate";
import Validator from "./PasswordUpdateValidator";
function UpdatePassword() {
    const { handleChange, handleSubmit, values, errors } = usePasswordUpdate(
        Validator
    );

    return (
        <div>
            <FormLabel className="register__label">Enter Old Password</FormLabel>
            <input className="form-control" name="oldpassword" id="oldpassword" type="password" placeholder="Enter Old Password" value={values.oldpassword} onChange={handleChange}/> 
            {errors.oldpassword && <p>{errors.oldpassword}</p>}
            <FormLabel className="register__label">Enter New Password</FormLabel>
            <input className="form-control" name="newpassword" id="newpassword" type="password" placeholder="newpassword" value={values.newpassword} onChange={handleChange}/>
            {errors.newpassword && <p>{errors.newpassword}</p>}
            <FormLabel className="register__label">Confirm Password</FormLabel>
            <input className="form-control" name="confirmpassword" id="confirmpassword" type="password" placeholder="confirmpassowrd" value={values.confirmpassword} onChange={handleChange}/>
            {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
            <Button onClick={handleSubmit} className ="register__button btn-lg btn-block" style={{marginTop:"30px",marginBottom:"20px"}} id= "submit" >Update Password</Button>
        </div>
    )
}

export default UpdatePassword
