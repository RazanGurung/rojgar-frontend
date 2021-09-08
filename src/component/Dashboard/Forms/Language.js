import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./language.css";

const diffculty=[
    {
        label :  "Choose__Difficulty Level",
    },
    {
        label : "Communicational",
        value : "Communicational"
    },
    {
        label : "Fluent",
        value : "Fluent"
    },
    {
        label : "Native or Bilingual",
        value : "Native or Bilingual"
    }
]
function Language({plang, pdiff, slang, sdiff, tlang, tdiff,}) {
    const id = localStorage.getItem("id");

    const [planguage, setPlanguage] = useState(plang);
    const [slanguage, setSlanguage] = useState(slang);
    const [tlanguage, setTlanguage] = useState(tlang);
    const [pdifficulty, setPdifficulty] = useState(pdiff);
    const [sdifficulty, setSdifficulty] = useState(sdiff);
    const [tdifficulty, setTdifficulty] = useState(tdiff);

    const languageUpdate=()=>{
        const data ={
            planguage:planguage,
            slanguage:slanguage,
            tlanguage:tlanguage,
            pdifficulty:pdifficulty,
            sdifficulty:sdifficulty,
            tdifficulty:tdifficulty
        }
        axios.put("https://rojgar-backend.herokuapp.com/language/update/"+ id, data).then((res)=>{
            window.location.href="/account"
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div className="language-container">
            <label className="register__label"> Primary Language</label>
            <div className = "language-choose">
                <input  name="language" id="language" type="text" placeholder="Language" value={planguage} onChange={(e)=> setPlanguage(e.target.value)}/>
                <select name="usertype"  id="usertype" value={pdifficulty} onChange={(e)=> setPdifficulty(e.target.value)}>
                    {diffculty.map((diffcult)=>(
                        <option value={diffcult.value}>{diffcult.label}</option>
                    ))}
                </select>
            </div>
            <label className="register__label"> Secondary Language</label>
            <div className = "language-choose">
                <input  name="language" id="language" type="text" placeholder="Language" value={slanguage} onChange={(e)=> setSlanguage(e.target.value)}/>
                <select name="usertype"  id="usertype" value={sdifficulty}  onChange={(e)=> setSdifficulty(e.target.value)}>
                    {diffculty.map((diffcult)=>(
                        <option value={diffcult.value}>{diffcult.label}</option>
                    ))}
                </select>
            </div>
            <label className="register__label"> Tertiary Language (Optional)</label>
            <div className = "language-choose">
                <input  name="language" id="language" type="text" placeholder="Language" value={tlanguage} onChange={(e)=> setTlanguage(e.target.value)}/>
                <select name="usertype"  id="usertype"  value={tdifficulty} onChange={(e)=> setTdifficulty(e.target.value)} >
                    {diffculty.map((diffcult)=>(
                        <option value={diffcult.value}>{diffcult.label}</option>
                    ))}
                </select>
            </div>
            <Button onClick={languageUpdate} className ="register__button btn-lg btn-block" style={{marginTop:"20px"}} id= "submit" >Update Information</Button>
        </div>
    )
}

export default Language
