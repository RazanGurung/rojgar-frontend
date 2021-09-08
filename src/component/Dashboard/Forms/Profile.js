import React, {useState} from 'react';
import './profile.css';
import axios from 'axios';

function Profile({apiProfile}) {
    const id = localStorage.getItem("id");
    const usertype = localStorage.getItem("usertype");

    const[updateProfile,setUpdateprofile]=useState();
    const [profile, setProfile] = useState(apiProfile);
    const fileHandler = (e)=>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setProfile(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setUpdateprofile(e.target.files[0])
    }
    const imageUpdate=()=>{
        const data=new FormData();
        data.append(
            "profile",updateProfile
        )
        axios.put(`https://rojgar-backend.herokuapp.com/user/update/profile/${id}`,data)
        .then((response)=>{
            if(usertype === "user"){
                window.location.href='/user-account'
            }else{
                window.location.href='/account'
            }
            
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="profile-container">
            <h2>Profile Picture</h2>
            <div className="profile-img-container">
                <img src={profile} className="profile-img-container"/>
            </div>
            <input type="file" className="myaccount__file" id="profile" name= "profile" onChange={fileHandler}/>
            <label className="myaccount__file__label" htmlFor="profile">Choose Image</label>
        <button onClick={imageUpdate} className="btn btn-large" style={{background:"purple", margin:"10px", color:"white"}}>Save Change</button>
        </div>
    )
}

export default Profile
