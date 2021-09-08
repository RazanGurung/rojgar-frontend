import React, {useState} from 'react';
import "./admin.css";
import {Link} from "react-router-dom";
import { Form,FormGroup, Button, FormLabel } from "react-bootstrap";
import axios from 'axios';

function AdminLogin() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const adminLogin = () =>{
        const data = {
            email : email,
            password : password
        }
        axios.post("https://rojgar-backend.herokuapp.com/admin/login", data).then((res=>{
                const id = res.data.data._id;
                localStorage.setItem("id",id);
                localStorage.setItem("usertype", res.data.data.usertype)
                localStorage.setItem("token", res.data.token);
                window.location.href="/admin/dashboard"
          }))
          .catch(err=>{
              alert("Invalid Password or Email");
          })
    }
    return (
        <div className="admin-login-container">
            <div className="admin-login-navbar">
                <div className="admin-login-logo">
                    <Link to="/"><img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png" /></Link>
                </div>
            </div>
            <div className="login">
                <Form className = "login__form">
                <h1 style={{marginBottom:'20px'}}>Admin Login</h1>
                    <FormGroup>
                        <FormLabel className="login__label">Email</FormLabel>
                        <input className="form-control" type="email" id="email" placeholder="Email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <FormLabel className="login__label">Password</FormLabel>
                        <input className="form-control" type="password" placeholder="Password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </FormGroup>
                    <Button onClick={adminLogin} className ="btn-lg btn-block login__button">Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default AdminLogin
