import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import WorkCard from '../Find/WorkCard';

function WorkSearch() {
    const [work, setWork] = useState([])
    const params = useParams();
    const search = params.search;
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/search/work?search="+search).then(res=>{
            setWork(res.data.data);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="professionalview-container">
            <div className="professionalview">
                <div className="professionalview-title">
                    <h2>Work Search Result</h2>
                </div>
                {
                     work.length === 0 ? (
                        <div className="no-content-container">
                            <img className="no-content" src="https://res.cloudinary.com/rojgar-com/image/upload/v1629473108/No_Content_rrbxgi.png" />
                        </div>
                    ):(
                        work.map((work)=>{ 
                            return(
                                <WorkCard 
                                    id = {work._id}
                                    title={work.worktitle}
                                    worktype={work.worktype}
                                    proficiency={work.proficiency}
                                    description={work.workdescription}
                                    esttime={work.esttime}
                                    paytype={work.paytype}
                                />
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default WorkSearch
