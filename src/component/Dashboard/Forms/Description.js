import React, {useState} from 'react';
import {FormLabel, Button} from "react-bootstrap";
import axios from 'axios';

function Description({jtitle ,jdescription}) {
    const id = localStorage.getItem("id");

    const [jobtitle, setJobtitle] = useState(jtitle);
    const [jobdescription, setJobdescription] = useState(jdescription);

    const descriptionUpdate=()=>{
        const data ={
            jobtitle:jobtitle,
            jobdescription:jobdescription,
        }
        axios.put("https://rojgar-backend.herokuapp.com/description/update/"+ id, data).then((res)=>{
            window.location.href="/account"
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div>
            <FormLabel className="register__label">Job Title</FormLabel>
            <input className="form-control" name="title" id="title" type="text" placeholder="Job Title" value={jobtitle} onChange={(e)=> setJobtitle(e.target.value)}/> 
            <FormLabel className="register__label">Description</FormLabel>
            <textarea className="form-control" name="description" id="description" type="text" placeholder="Job Description" style={{height:"200px"}} value={jobdescription} onChange={(e)=> setJobdescription(e.target.value)}/> 
            <Button onClick={descriptionUpdate} className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" >Update Job Description</Button>
        </div>
    )
}

export default Description
