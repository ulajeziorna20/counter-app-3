import React from "react";
import "./Display.css";



function Display(props) {

    return (
        <div className="div-my-age">
            <span className="my-age">
                {props.displayValue}
            </span>
        </div>
    )

}

export default Display;