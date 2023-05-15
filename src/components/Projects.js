import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/Project1.png";
import projImg2 from "../assets/img/Project2.png";
import projImg3 from "../assets/img/Project3.png";

export default function Projects() {
  const project1 = [
    {
      description: "A Weather Dashboard using the 5-Day Weather Forecast API",
      imgUrl: projImg1,
      link: "https://github.com/PRamsey02/Weather-Dashboard",
    },
  ];

  const project2 = [
    {
      description:
        "A Password Generator with the abilities to customize length, upper, lower, numeric, and special character values",
      imgUrl: projImg2,
      link: "https://github.com/PRamsey02/Password-Generator",
    },
  ];

  const project3 = [
    {
      description: "A Coding Quiz developed using JavaScript",
      imgUrl: projImg3,
      link: "https://github.com/PRamsey02/Code-Quiz",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>The projects I've currently completed</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Weather Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Password Generator</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">JavaScript Quiz</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {project1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {project2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {project3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
