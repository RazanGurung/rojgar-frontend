import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./viewuser.css";

function ViewPost() {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/all/job").then((res=>{
            setPost(res.data.data)
        }))
        .catch(err=>{
            alert(err);
        })
    }, [])

    const deleteUser = (id) =>{
        axios.delete("https://rojgar-backend.herokuapp.com/post/delete/"+id).then((res=>{
            alert("Deleted Successfully")
            window.location.href="/admin/view/post"
        }))
        .catch(err=>{
            alert(err);
        })
    }
    return (
        <div className="view-user-container">
            <div className="view-user">
                <h2>View Professional User Detail</h2>
                <table className="view-user-table">
                    <tr>
                        <th>Work Title</th>
                        <th>Pay Type</th>
                        <th>Work Type</th>
                        <th>Proficiency</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        post.map(post=>{
                            return(
                                <tr>
                                    <td>{post.worktitle }</td>
                                    <td>{post.paytype}</td>
                                    <td>{post.worktype}</td>
                                    <td>{post.proficiency}</td>
                                    <td>{post.status}</td>
                                    <td style={{cursor:"pointer"}} onClick={()=>deleteUser(post._id)}>delete</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default ViewPost
