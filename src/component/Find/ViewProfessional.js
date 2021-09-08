import React, { useEffect, useState } from 'react';
import ProfessionalCard from './ProfessionalCard';
import "../../css/professionalview.css";
import axios from 'axios';

function ViewProfessional() {
    const [professional, setProfessional] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/show/professional").then(res=>{
            const professionalData = res.data.data.reverse();
            setProfessional(professionalData);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="professionalview-container">
            <div className="professionalview">
                <div className="professionalview-title">
                    <h2>Most Rated Professionals For You</h2>
                </div>
                {
                    professional.map((professional)=>{ 
                        return(
                                <ProfessionalCard 
                                id = {professional._id}
                                img={professional.profile}
                                firstname={professional.firstname}
                                lastname={professional.lastname}
                                profession={professional.job.title}
                                address={professional.address.city}
                                description={professional.job.description}
                                payrate={professional.payrate}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ViewProfessional
