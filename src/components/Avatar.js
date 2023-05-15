import React from "react";
import profilePic from "../assets/img/profilePic.jfif";

export default function Avatar() {
  return (
    <div id="profile-pic">
      <img src={profilePic} alt="avatar" />
    </div>
  );
}
