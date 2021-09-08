import React, {useState,useEffect} from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import WcIcon from '@material-ui/icons/Wc';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import axios from "axios";

function ProfessionalDetail({id}) {
    const noProfile = "images/user.png";
    const noCertificate = "images/certificate.jpg";
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [profile, setProfile] = useState("");
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

    const [reviews, setReviews] = useState([])  

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
            setGender(res.data.data.gender)
            setCountry(res.data.data.address.country)
            setCity(res.data.data.address.city)
            setStreet(res.data.data.address.street)
            setPayrate(res.data.data.payrate)
            setUniversity(res.data.data.education.university)
            setDegree(res.data.data.education.degree)
            setFaculty(res.data.data.education.faculty)
            setStartdate(res.data.data.education.startdate)
            setEnddate(res.data.data.education.enddate)
            setPlanguage(res.data.data.language[0].primarylanguage.language)
            setSlanguage(res.data.data.language[0].secondarylanguage.language)
            setTlanguage(res.data.data.language[0].tertiarylanguage.language)
            setPdifficulty(res.data.data.language[0].primarylanguage.difficulty)
            setSdifficulty(res.data.data.language[0].secondarylanguage.difficulty)
            setTdifficulty(res.data.data.language[0].tertiarylanguage.difficulty)
            setJobtitle(res.data.data.job.title)
            setJobdescription(res.data.data.job.description)

        }).catch(err=>{
            console.log(err)
        })

        axios.get("https://rojgar-backend.herokuapp.com/review/professional/"+id).then(res=>{
            const reviewData = res.data.data.reverse();
            setReviews(reviewData);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return (
            <div className="professional-account-detail">
                <div className="account-detail-user">
                    <div className="account-detail-user-img">
                        <img src={profile} className="user-profile"/>
                    </div>
                    <div className="account-detail-user-name">
                        <h3>{firstname +" "+ lastname}</h3>
                        {
                            country == "" ? <p><LocationOnIcon />{"street, city, country"}  </p> : <p><LocationOnIcon />{street+", "+city+", "+country}  </p>
                        }
                    </div>
                </div>
                <div className="account-detail-user-info">
                    <div className="account-detail-user-info-general">
                        <div className="general">
                            <div className="general-title"><h3>General Info</h3></div>
                            <div className="general-info"><WcIcon className="general-icon"/> <p>{gender}</p></div>
                            <div className="general-info"><p>&#x20B9;</p>{payrate=="" ? "Add Your Paying Rate" : <p>{payrate}</p>}</div>
                        </div>
                        <div className="general">
                            <div className="general-title"><h3>Education </h3></div>
                            <div className="general-info">{university=="" ? "Add Your Education" : <h4>{university}</h4>}</div>
                            <div className="general-info">{degree=="" ? "Add Your Education" : <p>{degree}</p>}</div>
                            <div className="general-info"> {faculty=="" ? "Add Your Education" : <p>{faculty}</p>}</div>
                            <div className="general-info"> {startdate==null ? "Add Your Education" : <p> {startdate+ " to " +enddate}</p>}</div>
                        </div>  
                        <div className="general">
                            <div className="general-title"><h3>Languages</h3></div>
                            <div className="general-info">{planguage=="" ? <p>Add Primary Language</p> : <p>{planguage+" : " +pdifficulty}</p>}</div>
                            <div className="general-info">{slanguage=="" ? <p>Add Secondary Language</p> : <p>{slanguage+" : " +sdifficulty}</p>} </div>
                            <div className="general-info">{tlanguage=="" ? <p>Add Tertiary Language</p> : <p>{tlanguage+" : " +tdifficulty}</p>} </div>
                        </div>
                    </div>
                    <div className="account-detail-user-info-professional">
                        <div className="account-detail-user-info-professional-description">
                            <div className="general-title">{jobtitle == "" ? <h2>Add Job Title</h2> : <h2>{jobtitle}</h2>}</div>
                            {jobdescription=="" ? <p>Add Job Description</p> : <p>{jobdescription}</p>}
                        </div>
                        <div className="account-detail-user-info-professional-work-history">
                            <h4>Work History</h4>
                            <p>No work History</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProfessionalDetail
