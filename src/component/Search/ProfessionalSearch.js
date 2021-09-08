import React, { useEffect, useState } from 'react';
import ProfessionalCard from '../Find/ProfessionalCard';
import "../../css/professionalview.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfessionalSearch() {
    const params = useParams();
    const search = params.search;
    const [professional,setProfessional]=useState([]);
        
    useEffect(() => {
            axios.get("https://rojgar-backend.herokuapp.com/search/professional?search="+search).then(res=>{
                setProfessional(res.data.data);
            }).catch(err=>{
                alert(err);
            })
    }, [])
    return (
        <div className="professionalview-container">
            <div className="professionalview">
                <div className="professionalview-title">
                    <h2>Professional Search Result</h2>
                </div>
                {
                    professional.length === 0 ? (
                        <div className="no-content-container">
                            <img className="no-content" src="https://res.cloudinary.com/rojgar-com/image/upload/v1629473108/No_Content_rrbxgi.png" />
                        </div>
                    ):(
                        professional.map((professional)=>{ 
                            return(
                                <ProfessionalCard 
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
                    )
                }
            </div>
        </div>
    )
}

export default ProfessionalSearch
