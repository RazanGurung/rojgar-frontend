import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import axios from "axios";

function ApplicationEdit({id}) {
    const [application, setApplication] = useState("")
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/my/application/"+id).then(res=>{
            setApplication(res.data.data.application)
        }).catch(err=>{
            alert(err)
        })  
    }, [])
    const editApplication =()=>{
        const data = {
            application:application
        }
        axios.put("https://rojgar-backend.herokuapp.com/applicaiton/proposal/"+id,data).then(res=>{
            window.location.href="/professional/progress"
        }).catch(err=>{
            alert(err)
        })
    }
    return (
        <div>
            <textarea className="form-control" name="comments" type="text" placeholder="Your Comments" style={{height:"200px"}} value={id} onChange={(e)=>setApplication(e.target.value)}/> 
            <Button onClick={editApplication} className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" >Update Application</Button>
        </div>
    )
}

export default ApplicationEdit
