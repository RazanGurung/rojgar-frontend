import React, {useState} from 'react';
import { Button, FormLabel } from "react-bootstrap";
import axios from 'axios';

function Education({uniname, edegree, efaculty, estart, eend}) {
    const id = localStorage.getItem("id");

    const [university, setUniversity] = useState(uniname);
    const [faculty, setFaculty] = useState(edegree);
    const [degree, setDegree] = useState(efaculty);
    const [startdate, setStartdate] = useState(estart);
    const [enddate, setEnddate] = useState(eend);

    const educationUpdate=()=>{
        const data ={
            university:university,
            faculty:faculty,
            degree:degree,
            startdate:startdate,
            enddate:enddate
        }
        axios.put("https://rojgar-backend.herokuapp.com/education/update/"+ id, data).then((res)=>{
            window.location.href="/account"
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div style={{width:"700px"}}>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">University or College</FormLabel>
                    <input className="form-control" name="university" id="university" type="text" placeholder="University or College Name" value={university} onChange={(e)=> setUniversity(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">Faculty</FormLabel>
                        <input className="form-control" name="faculty" id="faculty" type="text" placeholder="Faculty Name" value={faculty} onChange={(e)=> setFaculty(e.target.value)}/> 
                </div>
            </div>
            <FormLabel className="register__label">Qualification or Degree</FormLabel>
            <input className="form-control" name="degree" id="degree" type="text" placeholder="Qualification or Degree" value={degree} onChange={(e)=> setDegree(e.target.value)}/>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Start Date</FormLabel>
                    <input className="form-control" name="startdate" id="startdate" type="date" placeholder="Start Date (College or University)" value={startdate} onChange={(e)=> setStartdate(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">End Date (or Ongoing)</FormLabel>
                    <input className="form-control" name="enddate" id="enddate" type="date" placeholder="End Date (College or University)" value={enddate} onChange={(e)=> setEnddate(e.target.value)}/>
                </div>
            </div>
            <Button onClick={educationUpdate} className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" >Update Educational Information</Button>
        </div>
    )
}

export default Education
