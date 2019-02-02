import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.icon} {props.title}
            </div>
            {props.children}
        </div>
    );
}

export default Card;
