import React from 'react';
import SlidingPane from "react-sliding-pane";
import '../../css/popup.css';

function SlidingPopup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    return (
        <div className="popup-container">
            <SlidingPane 
                className="popup-slider"
                isOpen={openPopup}
                title={title}
                onRequestClose={() => {
                    setOpenPopup(false);
                }}
            >
                {children}
            </SlidingPane>
        </div>
    )
}

export default SlidingPopup
