import React, {useState} from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SlidePopup from '../Popups/SlidingPopup';
import ApplyJob from '../Apply_Hire/ApplyJob';
import {Link} from "react-router-dom";
import axios from 'axios';

function WorkCard({id,title,proficiency,description,esttime,paytype}) {
    const [click, setClick] = useState(false)
    const [apply, setApply] = useState(false)
    const uid = localStorage.getItem("id");
    const addBookMark=()=>{
        setClick(true)
        const data ={
            workid:id,
            worktitle:title,
            proficiency:proficiency,
            esttime:esttime,
            paytype:paytype,
        }
        axios.post("https://rojgar-backend.herokuapp.com/bookmark/post/"+uid,data).then(res=>{
            alert("successfully bookmarked")
        }).catch(err=>{
            alert("cannot bookmark")
        })
    }
    const removeBookMark=()=>{
        setClick(false)
    }
    return (
        <div className="workcard-container">
            <div className="workcard-container-title" >
                <h4 onClick={()=>setApply(true)}>{title}</h4>
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
            <p>{description}</p>
            <div className="button-container">
                <span className="additional-detail">{paytype+" - "+ proficiency +" - " +  "Estimated-Time : " + esttime  }</span>
                <button onClick={()=>setApply(true)} className="btn btn-large submit-button">Submit Proposal</button>
            </div>
            <SlidePopup title ="Apply for the work" openPopup={apply} setOpenPopup={setApply}>
                <ApplyJob id={id}/>
            </SlidePopup>
        </div>
    )
}

export default WorkCard
