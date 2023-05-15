import React from "react";
import Avatar from "../components/Avatar";

export default function Banner() {
  return (
    <section>
      <Avatar />
      <div className="background" id="home">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="title">
          <span>Preston Ramsey</span>
          <br></br>
          <span>Full-Stack Developer</span>
        </div>
      </div>
    </section>
  );
}
