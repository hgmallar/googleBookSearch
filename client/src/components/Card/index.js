import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card mx-auto mb-3">
            <div className="card-header">
                {props.icon} {props.title}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.children}</li>
            </ul>
        </div>
    );
}

export default Card;
