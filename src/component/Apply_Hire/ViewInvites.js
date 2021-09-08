import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "./viewrequest.css";
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

function ViewInvites() {
    const id = localStorage.getItem("id");
    const [invites, setInvites] = useState([]);
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/job/invite/"+id).then(res=>{
            const reverseData = res.data.data.reverse()
            setInvites(reverseData)
        }).catch(err=>{
            alert("Error Population data")
        })
    }, [])
    
    const truth = "true";
    const falsy = "false";
    const changeStatus = (iid,status)=>{
        const data ={
            status:status
        }
        axios.put("https://rojgar-backend.herokuapp.com/update/status/"+iid,data).then(res=>{
            console.log(status)
            window.location.href="/view/invites"
        }).catch(err=>{
            toast.error("Error updating data")
        })
    }
    return (
        <div className="view-invites-container">
            <div className="view-invite-request">
                <h2>Your Job Invite</h2>
                <div className="invite-container-top">
                    <h4 className="invite-container-header">New Invite</h4>
                    {
                        invites.map((invite)=>{
                            const status = invite.status
                            return(
                                status == "ongoing" &&
                                <div className="view-invites-request-detail">
                                <div className="view-invites-request-detail-title">
                                    <h4>{invite.worktitle}</h4>
                                    <p><span>paytype : {invite.paytype}</span> </p>
                                </div>
                                <p>{invite.workdescription}</p>
                                <div className="view-invites-request-detail-action">
                                    <button onClick={()=>changeStatus(invite._id,falsy)} className="btn request-btn">Cancel</button>
                                    <button onClick={()=>changeStatus(invite._id,truth)} className="btn request-btn">Accept</button>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="invite-container">
                    <h4 className="invite-container-header">Accepted Invite</h4>
                    {
                        invites.map((invite)=>{
                            const status = invite.status
                            return(
                                status == "true" &&
                                <div className="view-invites-request-detail">
                                <div className="view-invites-request-detail-title">
                                    <h4>{invite.worktitle}</h4>
                                    <p><span>paytype : {invite.paytype}</span> </p>
                                </div>
                                <p>{invite.workdescription}</p>
                                <div className="view-invites-request-detail-action">
                                    <button onClick={()=>changeStatus(invite._id,falsy)} className="btn request-btn">Remove</button>
                                    <button onClick={()=>changeStatus(invite._id,truth)} className="btn request-btn">Accept</button>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default ViewInvites
                            