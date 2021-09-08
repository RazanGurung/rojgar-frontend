import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./viewuser.css";

function ViewProfessional() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/show/professional").then((res=>{
            setUser(res.data.data)
        }))
        .catch(err=>{
            alert(err);
        })
    }, [])

    const deleteUser = (id) =>{
        axios.delete("https://rojgar-backend.herokuapp.com/user/delete/"+id).then((res=>{
            alert("Deleted Successfully")
            window.location.href="/admin/view/professional"
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
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone No</th>
                        <th>Verfied</th>
                        <th>Action</th>
                    </tr>
                    {
                        user.map(user=>{
                            return(
                                <tr>
                                    <td>{user.firstname + " " + user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.emailverified ? "yes" : "no"}</td>
                                    <td style={{cursor:"pointer"}} onClick={()=>deleteUser(user._id)}>delete</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default ViewProfessional
