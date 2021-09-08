import axios from 'axios';
import React, {useState} from 'react';
import { Button, FormLabel } from "react-bootstrap";

const gendertype = [
    {
        label :  "Choose__Gender",
    },
    {
        label :  "Male",
        value : "male"
    },
    {
        label : "Female",
        value : "female"
    },
    {
        label : "Others",
        value : "others"
    }
]
function General({fname, lname, gphone, gcountry, gcity, gstreet, gdob, ggender, gpayrate}) {
    const id = localStorage.getItem("id");
    const usertype = localStorage.getItem("usertype");

    const [firstname, setFirstname] = useState(fname);
    const [lastname, setLastname] = useState(lname);
    const [phone, setPhone] = useState(gphone);
    const [gender, setGender] = useState(ggender);
    const [country, setCountry] = useState(gcountry);
    const [city, setCity] = useState(gcity);
    const [street, setStreet] = useState(gstreet);
    const [dob, setDob] = useState(gdob);
    const [payrate, setPayrate] = useState(gpayrate);

    const generalUpdate=()=>{
        if(payrate <= 0 ){
            return alert("Positive Number Required")
        }
        const data ={
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            gender:gender,
            country:country,
            city:city,
            street:street,
            dob:dob,
            payrate:payrate
        }
        axios.put("https://rojgar-backend.herokuapp.com/general/update/"+ id, data).then((res)=>{
            localStorage.setItem("username", firstname + " " + lastname)
            window.location.href="/account"
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div style={{width:"700px"}}>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">FirstName</FormLabel>
                    <input className="form-control" name="firstname" id="firstname" type="text" placeholder="FirstName" value={firstname} onChange={(e)=> setFirstname(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">LastName</FormLabel>
                    <input className="form-control" name="lastname" id="lastname" type="text" placeholder="LastName" value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
                </div>
            </div>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Phone Number</FormLabel>
                    <input className="form-control" name="phone" id="phone" type="tel" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">Address (Country)</FormLabel>
                    <input className="form-control" name="country" id="country" type="text" placeholder="Country Name" value={country} onChange={(e)=> setCountry(e.target.value)}/>
                </div>
            </div>
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Address (City)</FormLabel>
                    <input className="form-control" name="city" id="city" type="text" placeholder="City Name" value={city} onChange={(e)=> setCity(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <FormLabel className="register__label">Address (Toll or Street)</FormLabel>
                    <input className="form-control" name="street" id="street" type="text" placeholder="Street Name or Toll Name" value={street} onChange={(e)=> setStreet(e.target.value)}/>
                </div>
            </div>
            {
                usertype === "user" ?(
                        <div>
                            <FormLabel className="register__label">Date of Birth</FormLabel>
                            <input className="form-control" name="dob" id="dob" type="date" value={dob} onChange={(e)=> setDob(e.target.value)}/>
                        </div>
                ) : (
                    <div className="register__name">
                        <div className="register__option">
                            <FormLabel className="register__label">Date of Birth</FormLabel>
                            <input className="form-control" name="dob" id="dob" type="date" value={dob} onChange={(e)=> setDob(e.target.value)}/>
                        </div>
                        <div className="register__option">
                            <FormLabel className="register__label">Pay Rate(Rs)</FormLabel>
                            <input className="form-control" name="payrate" id="payrate" type="number" value={payrate} onChange={(e)=> setPayrate(e.target.value)}/>
                        </div>
                    </div>
                )
            }
            <div className="register__name">
                <div className="register__option">
                    <FormLabel className="register__label">Gender</FormLabel>
                    <select className="form-control" name="gender" placeholder="Select Gender" id="gender" value={gender} onChange={(e)=> setGender(e.target.value)}>
                        {gendertype.map((gender)=>(
                            <option value={gender.value}>{gender.label}</option>
                        ))}
                    </select>
                </div>
                <div className="register__option">
                    <Button onClick={generalUpdate} className ="register__button btn-lg btn-block" style={{marginTop:"30px",marginBottom:"20px"}} id= "submit" >Update Information</Button>
                </div>
            </div>
        </div>
    )
}

export default General
