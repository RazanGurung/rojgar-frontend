import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './verification.css'

function EmailVerification() {
    const params = useParams();
    const token = params.token;
    const verifyEmail = ()=>{
        axios.put("https://rojgar-backend.herokuapp.com/user/confirmation/"+token).then(res=>{
            window.location.href="/login"
        }).catch(err=>{
            alert("Verification Unsuccessful");
        })
    }
    return (
        <div className="verification-container">
            <button onClick={verifyEmail} className="btn">Verify Email</button>
        </div>
    )
}

export default EmailVerification
