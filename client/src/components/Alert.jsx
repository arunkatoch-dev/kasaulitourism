import React from "react";
import "../css/alert.css";

const Alert = ({ msg }) => {
  return (
    <div className="alert-msg">
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
