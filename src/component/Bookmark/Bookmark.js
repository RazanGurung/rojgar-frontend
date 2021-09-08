import React, {useEffect, useState} from 'react';
import "./bookmark.css";
import axios from "axios";
import ApplyJob from '../Apply_Hire/ApplyJob';
import SlidePopup from '../Popups/SlidingPopup';
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

function Bookmark() {
    const [bookmarks, setBookmarks] = useState([])
    const id = localStorage.getItem("id");
    const [apply, setApply] = useState(false)

    const deleteBookmark = (bid) =>{
        axios.delete("https://rojgar-backend.herokuapp.com/bookmark/delete/"+bid).then(res=>{
            window.location.href="/bookmark"
        }).catch(err=>{
            toast.error("Bookmark Deleted Successfully")
        })
    }
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/user/bookmark/post/"+id).then(res=>{
            setBookmarks(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div className="bookmark-container">
            <div className="bookmark">
                <h1>Your Bookmarks</h1>
                {
                    bookmarks.map(bookmark=>{
                        return(
                            <div className="bookmark-item">
                                <div className="bookmark-item-detail">
                                    <h3>{bookmark.worktitle}</h3>
                                    <span className="additional-detail">{bookmark.paytype+" - "+ bookmark.proficiency +" - " +  "Estimated-Time : " + bookmark.esttime  }</span>
                                </div>
                                <div className="bookmark-item-action">
                                    <button onClick={()=>deleteBookmark(bookmark._id)}>Remove Bookmark</button>
                                    <button onClick={()=>setApply(true)}>Submit Proposal</button>
                                </div>
                                <SlidePopup title ="Apply for the work" openPopup={apply} setOpenPopup={setApply}>
                                    <ApplyJob id={bookmark.workid}/>
                                </SlidePopup>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Bookmark
