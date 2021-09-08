import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AdminContact() {
    const [contact, setContact] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/contact/view").then((res=>{
            setContact(res.data.data)
        }))
        .catch(err=>{
            alert(err);
        })
    }, [])
    return (
        <div className="view-user-container">
            <div className="view-user">
                <h2>View Professional User Detail</h2>
                <table className="view-user-table">
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                    {
                        contact.map(contact=>{
                            return(
                                <tr>
                                    <td>{contact.firstname + " " + contact.lastname}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.message}</td>
                                    <td style={{cursor:"pointer"}} ><a href="https://mail.google.com/"><button style={{outline:"none",border:"none",background:"purple",color:"white", borderRadius:"5px",height:"30px", width:"70px"}} >Reply</button></a></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AdminContact
