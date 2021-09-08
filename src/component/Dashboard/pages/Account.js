import React, {useState, useEffect} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import WcIcon from '@material-ui/icons/Wc';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import CakeIcon from '@material-ui/icons/Cake';
import '../../../css/account.css';
import "react-bootstrap";
import ProfilePopup from "../../Popups/Popup";
import GeneralPopup from "../../Popups/Popup";
import EducationPopup from "../../Popups/Popup";
import LanguagePopup from "../../Popups/Popup";
import DescriptionPopup from "../../Popups/Popup";
import ConfirmPopup from "../../Popups/Popup";
import UpdatePopup from "../../Popups/Popup";
import Profile from "../Forms/Profile";
import General from "../Forms/General";
import Education from "../Forms/Education";
import Language from "../Forms/Language";
import Description from "../Forms/Description";
import ConformationDialog from "../Forms/ConformationDialog";
import UpdatePassword from "../Forms/UpdatePassword";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Dropdown} from "react-bootstrap";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SettingsIcon from '@material-ui/icons/Settings';
import axios from 'axios';

function Account() {
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

    const noProfile = "images/user.png";
    const [profilePopup ,setProfilePopup] = useState(false); 
    const [generalPopup ,setGeneralPopup] = useState(false); 
    const [educationPopup ,setEducationPopup] = useState(false); 
    const [languagePopup ,setLanguagePopup] = useState(false); 
    const [descriptionPopup ,setDescriptionPopup] = useState(false); 
    const [confirmPopup ,setConfirmPopup] = useState(false); 
    const [updatepasswordPopup ,setUpdatePasswordPopup] = useState(false); 

    const username = localStorage.getItem("username")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [usertype, setUsertype] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [profile, setProfile] = useState("");
    const [dob, setDob] = useState("");
    const [payrate, setPayrate] = useState("");
    const [university, setUniversity] = useState("");
    const [faculty, setFaculty] = useState("");
    const [degree, setDegree] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [planguage, setPlanguage] = useState("");
    const [slanguage, setSlanguage] = useState("");
    const [tlanguage, setTlanguage] = useState("");
    const [pdifficulty, setPdifficulty] = useState("");
    const [sdifficulty, setSdifficulty] = useState("");
    const [tdifficulty, setTdifficulty] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [jobdescription, setJobdescription] = useState("");
    
    useEffect(()=>{
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
            setPayrate(res.data.data.payrate)
            setUniversity(res.data.data.education.university)
            setDegree(res.data.data.education.degree)
            setFaculty(res.data.data.education.faculty)
            setStartdate(res.data.data.education.startdate)
            setEnddate(res.data.data.education.enddate)
            setPlanguage(res.data.data.language.primarylanguage.language)
            setSlanguage(res.data.data.language.secondarylanguage.language)
            setTlanguage(res.data.data.language.tertiarylanguage.language)
            setPdifficulty(res.data.data.language.primarylanguage.difficulty)
            setSdifficulty(res.data.data.language.secondarylanguage.difficulty)
            setTdifficulty(res.data.data.language.tertiarylanguage.difficulty)
            setJobtitle(res.data.data.job.title)
            setJobdescription(res.data.data.job.description)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[]);
    localStorage.setItem("profile",profile)
    return (
        <div className="myaccount">
            {/* <PlaceholderLoading shape="circle" width={60} height={60} /> */}
            <div className="account-info">
                <h2>Better market your expertise with specialized profiles</h2>
                <p>Specialized profiles allow you to display more specific skills, deliverables, and more – and help power better search results and job recommendations.</p>
                <button className="account-info-button">Learn More</button>
            </div>
            <div className="account-detail">
                <div className="account-detail-user">
                    <div className="account-detail-user-img">
                        <img src={profile} className="user-profile"/>
                        <div className="edit-profile" onClick={()=>setProfilePopup(true)}><EditIcon /></div>
                    </div>
                    <div className="account-detail-user-name">
                        <h3>{username}</h3>
                        {
                            country == "" ? <p><LocationOnIcon />{"street, city, country"}  </p> : <p><LocationOnIcon />{street+", "+city+", "+country}  </p>
                        }
                    </div>
                    <div className="account-detail-user-button">
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
                <div className="account-detail-user-info">
                    <div className="account-detail-user-info-general">
                        <div className="general">
                            <div className="general-title"><h3>General Info</h3><div className="edit" onClick={()=>setGeneralPopup(true)}><EditIcon /></div></div>
                            <div className="general-info"><MailOutlineIcon className="general-icon"/> <p>{email}</p></div>
                            <div className="general-info"><LocalPhoneIcon className="general-icon"/> <p>{phone}</p></div>
                            <div className="general-info"><WcIcon className="general-icon"/> <p>{gender}</p></div>
                            <div className="general-info"><MergeTypeIcon className="general-icon"/> <p>{usertype}</p></div>
                            <div className="general-info"><CakeIcon className="general-icon"/>{dob=="" ? "Add Date of Birth" : <p>{dob}</p>} </div>
                            <div className="general-info"><p>&#x20B9;</p>{dob=="" ? "Add Your Paying Rate" : <p>{payrate}</p>}</div>
                        </div>
                        <div className="general">
                            <div className="general-title"><h3>Education </h3><div className="edit" onClick={()=>setEducationPopup(true)}><EditIcon /></div></div>
                            <div className="general-info">{university=="" ? "Add Your Education" : <h4>{university}</h4>}</div>
                            <div className="general-info">{degree=="" ? "Add Your Education" : <p>{degree}</p>}</div>
                            <div className="general-info"> {faculty=="" ? "Add Your Education" : <p>{faculty}</p>}</div>
                            <div className="general-info"> {startdate==null ? "Add Your Education" : <p> {startdate+ " to " +enddate}</p>}</div>
                        </div>  
                        <div className="general">
                            <div className="general-title"><h3>Languages</h3><div className="edit" onClick={()=>setLanguagePopup(true)}><EditIcon /></div></div>
                            <div className="general-info">{planguage=="" ? <p>Add Primary Language</p> : <p>{planguage+" : " +pdifficulty}</p>}</div>
                            <div className="general-info">{slanguage=="" ? <p>Add Secondary Language</p> : <p>{slanguage+" : " +sdifficulty}</p>} </div>
                            <div className="general-info">{tlanguage=="" ? <p>Add Tertiary Language</p> : <p>{tlanguage+" : " +tdifficulty}</p>} </div>
                        </div>
                    </div>
                    <div className="account-detail-user-info-professional">
                        <div className="account-detail-user-info-professional-description">
                            <div className="general-title">{jobtitle == "" ? <h2>Add Job Title</h2> : <h2>{jobtitle}</h2>}<div className="edit" onClick={()=>setDescriptionPopup(true)}><EditIcon /></div></div>
                            {jobdescription=="" ? <p>Add Job Description</p> : <p>{jobdescription}</p>}
                        </div>
                        <div className="account-detail-user-info-professional-work-history">
                            <h4>Work History</h4>
                            <p>No work History</p>
                        </div>
                    </div>
                </div>
            </div>
                <ProfilePopup title="Update Your Profile Picture" openPopup = {profilePopup} setOpenPopup = {setProfilePopup}>
                    <Profile apiProfile={profile}/>
                </ProfilePopup>
                <GeneralPopup title="Update Your Information" openPopup = {generalPopup} setOpenPopup = {setGeneralPopup}>
                    <General fname={firstname} lname={lastname} gphone={phone} gcountry={country} gcity={city} gstreet={street} gdob={dob} ggender={gender} gpayrate={payrate}/>
                </GeneralPopup>
                <EducationPopup title="Update Your Educational Details" openPopup = {educationPopup} setOpenPopup = {setEducationPopup}>
                    <Education uniname={university} edegree={degree} efaculty={faculty} estart={startdate} eend={enddate} />
                </EducationPopup>
                <LanguagePopup title="Update Your Language Details" openPopup = {languagePopup} setOpenPopup = {setLanguagePopup}>
                    <Language  plang={planguage} slang={slanguage} tlang={tlanguage} pdiff={pdifficulty} sdiff={sdifficulty} tdiff={tdifficulty} />
                </LanguagePopup>
                <DescriptionPopup title="Update Your Professionalism" openPopup = {descriptionPopup} setOpenPopup = {setDescriptionPopup}>
                    <Description jtitle={jobtitle} jdescription={jobdescription}/>
                </DescriptionPopup>
                <ConfirmPopup title="Confirm Your Action" openPopup = {confirmPopup} setOpenPopup = {setConfirmPopup}>
                    <ConformationDialog state = {setConfirmPopup} delete={deleteAccount} id={id}/>
                </ConfirmPopup>
                <UpdatePopup title="Change Password" openPopup = {updatepasswordPopup} setOpenPopup = {setUpdatePasswordPopup}>
                    <UpdatePassword />
                </UpdatePopup>
        </div>
    )
}

export default Account;
