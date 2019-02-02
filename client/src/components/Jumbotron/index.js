import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <header className="jumbotron">
      {props.children ? props.children : <div><h1>(React) Google Books Search</h1> <h3>Search for and Save Books of Interest.</h3></div>}
    </header>
  );
}

export default Jumbotron;
