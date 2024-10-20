import React from "react";
import "../../assets/css/infoContainer.css";

export default function InfoContainer() {
  return (
    <div className="infos-wrapper">
      <div className="infos">
        <i className="fa-solid fa-comments"></i>
        <h2 className = "introLogo" >Nest Chat</h2>
        <p>Select a course groupchat to get started!</p>
      </div>
    </div>
  );
}