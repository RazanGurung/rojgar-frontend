import React, {useState,useEffect} from 'react';
import "./applyjob.css";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PaymentIcon from '@material-ui/icons/Payment';
import WorkIcon from '@material-ui/icons/Work';
import {Link} from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

function ApplyJob({id}) {
    const [click, setClick] = useState(false)
    const [worktitle, setWorktitle] = useState()
    const [worktype, setWorktype] = useState()
    const [proficiency, setProficiency] = useState()
    const [workdescription, setWorkdescription] = useState()
    const [esttime, setEsttime] = useState()
    const [paytype, setPaytype] = useState()
    const uid = localStorage.getItem("id");
    const addBookMark=()=>{
        setClick(true)
        const data ={
            workid: id,
            worktitle:worktitle,
            proficiency:proficiency,
            esttime:esttime,
            paytype:paytype,
        }
        axios.post("https://rojgar-backend.herokuapp.com/bookmark/post/"+uid,data).then(res=>{
            toast.error("successfully bookmarked")
        }).catch(err=>{
            toast.error("cannot bookmark")
        })
    }
    const removeBookMark=()=>{
        setClick(false)
    }
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/single/job/post/"+id).then(res=>{
            setWorktitle(res.data.data.worktitle);
            setProficiency(res.data.data.proficiency);
            setWorkdescription(res.data.data.workdescription);
            setEsttime(res.data.data.esttime);
            setPaytype(res.data.data.paytype);
            setWorktype(res.data.data.worktype);
            console.log(res)
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    const [application, setApplication] = useState("")
    const userid = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    const profile = localStorage.getItem("profile");
    const profession = localStorage.getItem("profession");
    const address = localStorage.getItem("address");
    const applyJob =()=>{
        const data = {
            application:application,
            userid:userid,
            workid:id,
            username:username,
            profile:profile,
            profession:profession,
            address:address,
            worktitle:worktitle
        }
        axios.post("https://rojgar-backend.herokuapp.com/apply/job",data).then(res=>{
            toast.error("Application Sent Successfully")
        }).catch(err=>{
            toast.error("Job Application Failed");
        })
    }
    return (
        <div className="applyjob-container">
            <div className="applyjob-work-detail">
                <div className="applyjob-work-detail-title">
                    <h2>{worktitle}</h2>
                    {
                    localStorage.getItem("token") ?(
                        <div>
                            {
                                click == true ? (
                                    <BookmarkIcon onClick={removeBookMark} style={{height:"30px",width:"30px"}}/>
                                ):(
                                    <BookmarkBorderIcon onClick={addBookMark} style={{height:"30px",width:"30px"}}/>
                                )
                            }
                        </div>
                        ):(
                            <Link to="/login" style={{textDecoration:"none", color:"purple"}}><BookmarkBorderIcon style={{height:"30px",width:"30px"}}/></Link>
                        )
                    }
                </div>
                <div className="applyjob-work-detail-description"> 
                    <p>{workdescription}</p>
                </div>
                <div className="applyjob-work-detail-additional-info">
                    <div className="apply-job-option">
                        <div className="apply-job-option-sub"><WatchLaterIcon style={{height:"30px" ,width:"30px"}}/><p>Estimated Time</p></div>
                        <span>{esttime}</span>
                    </div>
                    <div className="apply-job-option">
                        <div className="apply-job-option-sub"><HowToRegIcon style={{height:"30px" ,width:"30px"}}/><p>Proficiency Level</p></div>
                        <span>{proficiency}</span>
                    </div>
                    <div className="apply-job-option">
                        <div className="apply-job-option-sub"><PaymentIcon style={{height:"30px" ,width:"30px"}}/><p>Payment Type</p></div>
                        <span>{paytype}</span>
                    </div>
                    <div className="apply-job-option">
                        <div className="apply-job-option-sub"><WorkIcon style={{height:"30px" ,width:"30px"}}/><p>Worker - Type</p></div>
                        <span>{worktype}</span>
                    </div>
                </div>
            </div>
            <h3>Submit Your Proposal</h3>
            <p>Introduce yourself and explain why you’re a strong candidate for this job. Feel free to suggest any changes to the job details or ask to schedule a video call.</p>
            <textarea className="proposal-textarea" placeholder="Write application for the job." value={application} onChange={(e)=>setApplication(e.target.value)} />
            {
                localStorage.getItem("token") ?(
                    <button onClick={applyJob} className="btn btn-large submit-button">Submit Proposal</button>
                ):(
                    <Link to="/login"><button className="btn btn-large submit-button">Submit Proposal</button></Link>
                )
            }
        </div>
    )
}

export default ApplyJob
