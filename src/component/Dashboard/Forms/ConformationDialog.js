import React from 'react';
import "./confirmation.css"

function ConformationDialog(props) {
    return (
        <div className="confirmation-container">
            <div className="confirmation-message">
                <h4>Are You Sure, you want to delete?</h4>
            </div>
            <div className="confirmation-action">
                <button onClick={()=>props.delete(props.id)} style={{background:"green"}}>Yes</button>
                <button onClick={()=>props.state(false)} style={{background:"red"}} >No</button>
            </div>
        </div>
    )
}

export default ConformationDialog
