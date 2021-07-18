import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import no_show_model from "../../Assets/Projects/no_show_model.jpg";
import WebScrapper from "../../Assets/Projects/WebScrapper.jpg";
import googleMap from "../../Assets/Projects/google-map.jpg";
import leaf from "../../Assets/Projects/leaf.png";
import procument from "../../Assets/Projects/procument.jpg";
import chatApp from "../../Assets/Projects/chatApp.png";
import kerberos from "../../Assets/Projects/kerberos.png";
import springSecurity from "../../Assets/Projects/springSecurity.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Panchakarma"
              description="Research Project(Machine learning usage) - My contribution is feedback validation - Web Based Application -(Spring BootFramework, ReactJs, MySQL, Flask)"
              link="http://gitlab.sliit.lk/2020-31/panchakarma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kerberos}
              isBlog={false}
              title="Kerberos Authentication POC Project"
              description="Kerberos Authentication for authenticating services. Implement from scratch and spring security"
              link="https://github.com/dilanSuraj/kerberos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="React Chat App"
              description="React Chat App built with React Hooks and Socket.io)"
              link="https://github.com/dilanSuraj/react-chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce web application for a Phone case shop"
              description="E-commerce web application for a Phone case shop built with Firebase/Firestore Serverless, React Js, Node Js."
              link="https://github.com/FlipBox-Global/phonecase-spa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springSecurity}
              isBlog={false}
              title="Spring Security Project"
              description="Spring Security based project"
              link="https://github.com/dilanSuraj/SpringSecurityProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={procument}
              isBlog={false}
              title="Procument Construction Application"
              description="Procument Construction Application (2019 July - September) - (Spring Boot Framework, Angular JS, PhpMyAdmin, Ionic )"
              link="https://github.com/dilanSuraj/Procument_Construction_Industry_Repo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleMap}
              isBlog={false}
              title="React google map"
              description="Use of React with Google Map API"
              link="https://github.com/dilanSuraj/simple-react-google-map-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScrapper}
              isBlog={false}
              title="Web scrapper"
              description="Automated web scrapper"
              link="https://stupefied-mclean-1bc8c3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={no_show_model}
              isBlog={false}
              title="No-Show model"
              description="Medical appointment no-show appointment predictor model - (Python)"
              link="https://github.com/dilanSuraj/No-show-appointment-predictor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
