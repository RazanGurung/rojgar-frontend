import React, {useState, useEffect} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import WcIcon from '@material-ui/icons/Wc';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import CakeIcon from '@material-ui/icons/Cake';
import axios from "axios";
import Profile from "../Forms/Profile";
import General from "../Forms/General";
import ProfilePopup from "../../Popups/Popup";
import GeneralPopup from "../../Popups/Popup";
import "../../../css/user.css";
import {Dropdown} from "react-bootstrap";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SettingsIcon from '@material-ui/icons/Settings';
import ConformationDialog from "../Forms/ConformationDialog";
import ConfirmPopup from "../../Popups/Popup";
import UpdatePassword from "../Forms/UpdatePassword";
import UpdatePopup from "../../Popups/Popup";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function User() {
    const id = localStorage.getItem("id");
    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('userid')
        window.location.href = '/'
    }
    const deleteAccount = (uid)=>{
        axios.delete("https://rojgar-backend.herokuapp.com/user/delete/"+ uid).then(res=>{
            logout()
        }).catch(err=>{
            alert(err);
        })
    }
    const [profilePopup ,setProfilePopup] = useState(false); 
    const [generalPopup ,setGeneralPopup] = useState(false); 
    const [updatepasswordPopup ,setUpdatePasswordPopup] = useState(false);

    const noProfile = "images/user.png";
    const [profile, setProfile]=useState();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [usertype, setUsertype] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [dob, setDob] = useState("");
    const username = localStorage.getItem("username")
    const [confirmPopup ,setConfirmPopup] = useState(false); 
    useEffect(() => {
        const id = localStorage.getItem("id");
        axios.get("https://rojgar-backend.herokuapp.com/user/account/"+ id).then(res=>{

            if(res.data.data.profile === "noImage.jpg"){
                setProfile(noProfile);
            }else{
                setProfile(res.data.data.profile);
            }
            setFirstname(res.data.data.firstname)
            setLastname(res.data.data.lastname)
            setEmail(res.data.data.email)
            setPhone(res.data.data.phone)
            setUsertype(res.data.data.usertype)
            setGender(res.data.data.gender)
            setCountry(res.data.data.address.country)
            setCity(res.data.data.address.city)
            setStreet(res.data.data.address.street)
            setDob(res.data.data.dob)
        })
    }, [])
    return (
        <div className="useraccount">
            <div className="useraccount-title">
                <h2>My Info</h2>
            </div>
            <div className="userdetail">
                <div className="userdetail-details">
                    <h2> User Account</h2>
                </div>
                <div className="userdetail-profile">
                    <div className="userdetail-profile-img">
                        <img className="user-profile" src={profile}/>
                        <div className="edit-profile" onClick={()=>setProfilePopup(true)}><EditIcon /></div>
                    </div>
                </div>
                <div className="userdetail-general">
                    <div className="userdetail-general-name">
                        <h3>{username}</h3>
                        <div className="edit" onClick={()=>setGeneralPopup(true)}><EditIcon /></div>
                    </div>
                    <div className="userdetail-general-info-container">
                        <div className="userdetail-general-info">
                            <div className="general-info"><MailOutlineIcon className="general-icon"/> <p>{email}</p></div>
                            <div className="general-info"><LocalPhoneIcon className="general-icon"/> <p>{phone}</p></div>
                            <div className="general-info"><WcIcon className="general-icon"/> <p>{gender}</p></div>
                            <div className="general-info"><MergeTypeIcon className="general-icon"/> <p>{usertype}</p></div>
                            <div className="general-info"><CakeIcon className="general-icon"/> <p>{dob}</p></div>
                        </div>
                        <div className="userdetail-general-info-action">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="accnav-dropdown">
                                    <p>Setting</p>
                                    <SettingsIcon />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="accnav-dropdown-menu">
                                    <Dropdown.Item className="accnav-dropdown-menu-items" onClick={()=>setUpdatePasswordPopup(true)}><VpnKeyIcon className="nav-menu-item-icon"/>Change Password</Dropdown.Item>
                                    <Dropdown.Item className="accnav-dropdown-menu-items" onClick={()=>setConfirmPopup(true)}><DeleteForeverIcon className="nav-menu-item-icon"/>Delete Account</Dropdown.Item>
                                    <Dropdown.Item onClick={logout}  className="accnav-dropdown-menu-items"><PowerSettingsNewIcon className="nav-menu-item-icon"/> Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> 
                        </div>
                    </div>
                </div>
            </div>
            <ProfilePopup title="Update Your Profile Picture" openPopup = {profilePopup} setOpenPopup = {setProfilePopup}>
                    <Profile apiProfile={profile}/>
            </ProfilePopup>
            <GeneralPopup title="Update Your Information" openPopup = {generalPopup} setOpenPopup = {setGeneralPopup}>
                <General fname={firstname} lname={lastname} gphone={phone} gcountry={country} gcity={city} gstreet={street} gdob={dob} ggender={gender}/>
            </GeneralPopup>
            <ConfirmPopup title="Confirm Your Action" openPopup = {confirmPopup} setOpenPopup = {setConfirmPopup}>
                <ConformationDialog state = {setConfirmPopup} delete={deleteAccount} id={id}/>
            </ConfirmPopup>
            <UpdatePopup title="Change Password" openPopup = {updatepasswordPopup} setOpenPopup = {setUpdatePasswordPopup}>
                <UpdatePassword />
            </UpdatePopup>
        </div>
    )
}

export default User
