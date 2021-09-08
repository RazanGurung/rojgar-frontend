import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "./jobrequest.css";
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

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
function JobRequest() {
    const params = useParams();
    const professionalid = params.id;
    const userid = localStorage.getItem("id");
    const [worktitle, setWorktitle] = useState("");
    const [workdescription, setWorkdescription] = useState("");
    const [paytype, setPaytype] = useState("");
    const [username, setUsername] = useState("")
    const [profile, setProfile] = useState("")

    const jobRequest = () =>{
        const data = {
            professionalid:professionalid,
            worktitle:worktitle,
            workdescription:workdescription,
            paytype:paytype,
            username:username,
            profile:profile
        }
        axios.post("https://rojgar-backend.herokuapp.com/job/request/"+userid,data).then(res=>{
            toast.error("successfull invited for job");
        }).catch(err=>{
            toast.error("Couldn't Invite")
        })
    }
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/user/account/"+professionalid).then(res=>{
            setUsername(res.data.data.firstname+" "+res.data.data.lastname)
            setProfile(res.data.data.profile)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div className="job-request-container">
            <div className="job-request-body">
                <h2>Job Request to {username}</h2>
                <div className="job-request-title">
                    <label>Job Title</label>
                    <input placeholder="Enter Job Title" id="worktitle" value={worktitle} onChange={(e)=>setWorktitle(e.target.value)}/>
                </div>
                <div className="job-request-description">
                    <label>Job Description</label>
                    <p>This is how talent figures out what you need and why you’re great to work with!</p>
                    <p>Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your project, team, or company. Here are several examples that illustrate best practices for effective job posts.</p>
                    <textarea  placeholder="Write Your Job description here." id="workdescription" value={workdescription} onChange={(e)=>setWorkdescription(e.target.value)}/>
                </div>
                <div className="job-request-additional">
                    <label>Pay Type</label>
                    <select className="form-control" name="paytype"  id="paytype" value={paytype} onChange={(e)=>setPaytype(e.target.value)}>
                        {pay.map((pro)=>(
                        <option value={pro.value}>{pro.label}</option>
                        ))}
                    </select>
                </div>
                <button onClick={jobRequest} className="btn job-request-button">Request Your Job</button>
            </div>
        </div>
    )
}

export default JobRequest
