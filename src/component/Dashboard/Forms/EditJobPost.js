import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {FormLabel, Button} from "react-bootstrap";

const proficiencylevel = [
    {
        label :  "Choose__proficiency__level",
    },
    {
        label :  "Fresher",
        value : "fresher"
    },
    {
        label : "Intermediate",
        value : "intermediate"
    },
    {
        label : "Professional",
        value : "professional"
    }
]
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
function EditJobPost({id}) {
    const [worktitle, setWorktitle] = useState()
    const [worktype, setWorktype] = useState()
    const [proficiency, setProficiency] = useState()
    const [workdescription, setWorkdescription] = useState()
    const [esttime, setEsttime] = useState()
    const [paytype, setPaytype] = useState()

    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/single/job/post/"+id).then(res=>{
            setWorktitle(res.data.data.worktitle)
            setWorktype(res.data.data.worktype)
            setProficiency(res.data.data.proficiency)
            setWorkdescription(res.data.data.workdescription)
            setEsttime(res.data.data.esttime)
            setPaytype(res.data.data.paytype)
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    const editPost =()=>{
        const data = {
            worktitle : worktitle,
            worktype : worktype,
            proficiency : proficiency,
            workdescription : workdescription,
            esttime:esttime,
            paytype:paytype
        }
        axios.put("https://rojgar-backend.herokuapp.com/post/update/"+id,data).then(res=>{
            window.location.href="/job-post";
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Work Title</FormLabel>
                    <input className="form-control" name="worktitle" id="worktitle" type="text" placeholder="Work Title" value={worktitle}  onChange={(e)=> setWorktitle(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">Work Type</FormLabel>
                    <input className="form-control" name="worktype" id="worktype" type="text" placeholder="Work Type" value={worktype}  onChange={(e)=> setWorktype(e.target.value)}/>
                </div>
            </div>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Estimated Time</FormLabel>
                    <input className="form-control" name="esttime" id="esttime" type="text" placeholder="Estimated Time" value={esttime}  onChange={(e)=> setEsttime(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">Pay Type</FormLabel>
                    <select className="form-control" name="paytype"  id="paytype" value={paytype}  onChange={(e)=> setPaytype(e.target.value)}>
                        {pay.map((pro)=>(
                        <option value={pro.value}>{pro.label}</option>
                        ))}
                    </select> 
                </div>
            </div>
            <FormLabel className="register__label">Worker (proficiency)</FormLabel>
            <select className="form-control" name="proficiency"  id="proficiency" value={proficiency}  onChange={(e)=> setProficiency(e.target.value)}>
                {proficiencylevel.map((pro)=>(
                    <option value={pro.value}>{pro.label}</option>
                ))}
            </select> 
            <FormLabel className="register__label">Work Description</FormLabel>
            <textarea className="form-control" name="title" id="title" type="text" placeholder="Job Description" style={{height:"150px"}} value={workdescription}  onChange={(e)=> setWorkdescription(e.target.value)}/> 
            <Button onClick={editPost}  className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" > Edit Job Post</Button>
        </div>
    )
}

export default EditJobPost
