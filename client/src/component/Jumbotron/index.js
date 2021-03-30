import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
 
    <div
      style={{  clear: "both",  textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;


