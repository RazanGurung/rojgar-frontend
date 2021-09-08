import axios from 'axios';
import React,{useState} from 'react';
import {FormLabel, Button} from "react-bootstrap";

const pay = [
    {
        label :  "Choose__Pay__Type",
    },
    {
        label :  "hourly",
        value : "hourly"
    },
    {
        label : "fixed",
        value : "fixed"
    }
]
function RequestEdit({id, oldworktitle, olddescription, oldpaytype}) {
    const [worktitle, setWorktitle] = useState(oldworktitle)
    const [workdescription, setWorkdescription] = useState(olddescription)
    const [paytype, setPaytype] = useState(oldpaytype)

    const editRequest = () => {
        const data = {
            worktitle:worktitle,
            workdescription:workdescription,
            paytype:paytype
        }
        axios.put("https://rojgar-backend.herokuapp.com/update/request/"+id,data).then(res=>{
            window.location.href="/user/progress"
        }).catch(err=>{
            alert(err)
        })
    }
    return (
        <div>
            <FormLabel className="register__label">Work Title</FormLabel>
            <input className="form-control" name="worktitle" id="worktitle" type="text" placeholder="Work Title" value={worktitle}  onChange={(e)=> setWorktitle(e.target.value)}/> 
            <FormLabel className="register__label">Pay Type</FormLabel>
            <select className="form-control" name="paytype"  id="paytype" value={paytype}  onChange={(e)=> setPaytype(e.target.value)}>
                {pay.map((pro)=>(
                <option value={pro.value}>{pro.label}</option>
                ))}
            </select> 
            <FormLabel className="register__label">Work Description</FormLabel>
            <textarea className="form-control" name="title" id="title" type="text" placeholder="Job Description" style={{height:"150px"}} value={workdescription}  onChange={(e)=> setWorkdescription(e.target.value)}/> 
            <Button onClick={editRequest}  className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" > Edit Job Post</Button>
        </div>
    )
}

export default RequestEdit
