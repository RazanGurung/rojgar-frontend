import axios from 'axios';
import React, {useState} from 'react';
import {FormLabel, Button} from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const colors = {
    purple : "#660066",
    grey : "#e0ebeb"
}

function Review({id, workid}) {

    const stars = Array(5).fill(0);
    const [currentvalue, setCurrentvalue] = useState(0)
    const [hovervalue, setHovervalue] = useState(undefined)
    const handleClcik = value =>{
        setCurrentvalue(value)
    };
    const handleMouseOver = value =>{
        setHovervalue(value)
    } 
    const handleMouseLeave = () =>{
        setHovervalue(undefined)
    }

    const userid = localStorage.getItem("id")
    const username = localStorage.getItem("username");
    const profile = localStorage.getItem("profile");
    const [review, setReview] = useState("")
    const reviewProfessional = () =>{
        const data ={
            workid:workid,
            professionalid:id,
            userid : userid,
            username:username,
            profile:profile,
            review:review,
            rating:currentvalue
        }
        axios.post("https://rojgar-backend.herokuapp.com/review/professional/"+id,data).then(res=>{
            window.location.href="/application/"+workid;
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className={styles.container}>
            <FormLabel>Rate And Leave Comment</FormLabel>
            <div>
                {
                    stars.map((_,index)=>{
                        return(
                            <FaStar 
                                key={index}
                                size={24}
                                style={{
                                    marginRight:10,
                                    cursor:"pointer"
                                }}
                                color={(hovervalue || currentvalue) > index ? colors.purple : colors.grey}
                                onClick={()=>handleClcik(index+1)}
                                onMouseOver={()=>handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })
                }
            </div>
            <textarea className="form-control" name="comments" type="text" placeholder="Your Comments" style={{height:"200px"}} value={review} onChange={(e)=>setReview(e.target.value)}/> 
            <Button onClick={reviewProfessional} className ="register__button btn-lg btn-block" style={{marginTop:"20px",marginBottom:"20px"}} id= "submit" >comment</Button>
        </div>
    )
}

const styles = {
    container : {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10px"
    }
}

export default Review
