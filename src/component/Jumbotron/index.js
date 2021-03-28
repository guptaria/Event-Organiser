import React from "react";


function Jumbotron({ children }) {
  return (
 
    <div
      style={{  clear: "both", paddingTop: 120,paddingLeft:120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;


