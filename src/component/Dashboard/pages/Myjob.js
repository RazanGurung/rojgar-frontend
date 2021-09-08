import React, {useState, useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddPopup from '../../Popups/Popup';
import EditPopup from '../../Popups/Popup';
import DeletePopup from '../../Popups/Popup';
import Conformation from '../Forms/ConformationDialog';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddJobpost from '../Forms/AddJobPost';
import EditJobPost from '../Forms/EditJobPost';
import '../../../css/myjob.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Myjob() {
    const [addPopup ,setAddPopup] = useState(false); 
    const [editPopup ,setEditPopup] = useState(false); 
    const [deletePopup ,setDeletePopup] = useState(false); 

    const [jobDetails, setJobDetail] = useState([]);
    const [currentLength, setCurrentLength] = useState();
    const [historyLength, setHistoryLength] = useState();

    const id = localStorage.getItem("id");
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/user/job/post/"+id).then(res=>{
            setJobDetail(res.data.data);
            setCurrentLength(res.data.data.length);
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    const deletePost = (id)=>{
        axios.delete("https://rojgar-backend.herokuapp.com/post/delete/"+id).then(res=>{
            window.location.href="/job-post"
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="myjob-container">
            <div className="myjob-header">
                <h3>My Job Post</h3>
                <div className="myjob-add-button" onClick={()=>setAddPopup(true)}>Add Post<AddIcon className="job-post-icon"/></div>
            </div>
            <div className="myjob-new">
                <h4>Current Post</h4>
                {   currentLength === 0 ?
                    (
                        <div>
                            <p>No post to display.</p>
                        </div>
                    ) : (
                        jobDetails.map((joblist)=>{
                            const status = joblist.status;
                            return(
                            status == "ongoing" &&
                            <div className="new-job">
                                <div className="new-job-title">
                                    <h4>{joblist.worktitle}</h4>
                                    <div className="new-job-title-icon">
                                        <div className="job-edit" onClick={()=>setEditPopup(true)}><EditIcon /></div>
                                        <div className="job-edit" onClick={()=>setDeletePopup(true)}><DeleteIcon /></div>
                                    </div>
                                </div>
                                <div className="new-job-description">
                                    <div className="new-job-desc">
                                        <p>{joblist.workdescription}</p>
                                    </div>
                                    <hr />
                                    <div className="new-job-info">
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Work-Type</p><p>{joblist.worktype}</p>
                                            </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Proficiency</p><p>{joblist.proficiency}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Work-Status</p><p>{joblist.status}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Est Time</p><p>{joblist.esttime}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Pay-Type</p><p>{joblist.paytype}</p>
                                        </div>
                                    </div>
                                    <Link to={"/application/"+joblist._id}><button className="btn" style={{width:"100%"}}>View Application</button></Link>
                                </div>
                                <EditPopup title="Edit Your Job Post" openPopup = {editPopup} setOpenPopup = {setEditPopup}>
                                    <EditJobPost  id={joblist._id}/>
                                </EditPopup>
                                <DeletePopup title="Delete Conformation" openPopup = {deletePopup} setOpenPopup = {setDeletePopup}>
                                    <Conformation state = {setDeletePopup} delete={deletePost} id={joblist._id}/>
                                </DeletePopup>
                            </div>
                            )
                        })
                    )
                }
            </div>
            <div className="myjob-history">
                <h4> Hired for post History</h4>
                {   currentLength === 0 ?
                    (
                        <div>
                            <p>No post to display.</p>
                        </div>
                    ) : (
                        jobDetails.map((joblist)=>{
                            const status = joblist.status;
                            return(
                            status == "hired" &&
                            <div className="new-job">
                                <div className="new-job-title">
                                    <h4>{joblist.worktitle}</h4>
                                    <div className="new-job-title-icon">
                                        <div className="job-edit" onClick={()=>setEditPopup(true)}><EditIcon /></div>
                                        <div className="job-edit" onClick={()=>setDeletePopup(true)}><DeleteIcon /></div>
                                    </div>
                                </div>
                                <div className="new-job-description">
                                    <div className="new-job-desc">
                                        <p>{joblist.workdescription}</p>
                                    </div>
                                    <hr />
                                    <div className="new-job-info">
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Work-Type</p><p>{joblist.worktype}</p>
                                            </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Proficiency</p><p>{joblist.proficiency}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Work-Status</p><p>{joblist.status}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Est Time</p><p>{joblist.esttime}</p>
                                        </div>
                                        <div className="new-job-info-option">
                                            <p className="new-job-info-option-title">Pay-Type</p><p>{joblist.paytype}</p>
                                        </div>
                                    </div>
                                    <Link to={"/application/"+joblist._id}><button className="btn" style={{width:"100%"}}>View Application</button></Link>
                                </div>
                                <EditPopup title="Edit Your Job Post" openPopup = {editPopup} setOpenPopup = {setEditPopup}>
                                    <EditJobPost  id={joblist._id}/>
                                </EditPopup>
                                <DeletePopup title="Delete Conformation" openPopup = {deletePopup} setOpenPopup = {setDeletePopup}>
                                    <Conformation state = {setDeletePopup} delete={deletePost} id={joblist._id}/>
                                </DeletePopup>
                            </div>
                            )
                        })
                    )
                }
            </div>
            <AddPopup title="Post Your Job with requirement" openPopup = {addPopup} setOpenPopup = {setAddPopup}>
                <AddJobpost />
            </AddPopup>
        </div>
    )
}

export default Myjob
