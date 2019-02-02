import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="content">{props.children}</div>;
}

export default Wrapper;
