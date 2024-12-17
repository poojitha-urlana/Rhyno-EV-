import React from "react";

function popup(props){
    return( props.trigger)?( 
        <div className="Popup">
            <div className="popup-inner">
                <button className="close-btn">close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}