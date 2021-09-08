import React, {useState, useEffect} from 'react';
import WorkCard from "./WorkCard";
import '../../css/workview.css';
import axios from 'axios';

function ViewWork() {
    const [work, setWork] = useState([])
    useEffect(() => {
        axios.get("https://rojgar-backend.herokuapp.com/all/job/post").then(res=>{
            const workData = res.data.data.reverse();
            setWork(workData);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    return (
        <div className="professionalview-container">
            <div className="professionalview">
                <div className="professionalview-title">
                    <h2>Most Current Work For You</h2>
                </div>
                {
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
                }
            </div>
        </div>
    )
}

export default ViewWork
