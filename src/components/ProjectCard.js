import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project images" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
}
