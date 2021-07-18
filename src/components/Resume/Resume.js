import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Dilan_Amarasinghe.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer - Zone24x7 (Pvt) Ltd"
              date="January 2021 - Present"
            />
            <Resumecontent
              title="Software Engineer - Circles.Life"
              date="January 2021 - Present"
              content={[
                "Engaged in a telco project. (NodeJS, GoLang, MySQL, MongoDB)",
              ]}
            />
            <Resumecontent
              title="Software Engineer - Half Life (Private) Limited"
              date="January 2020 - January 2021"
              content={[
                "Engaged in a project to implement centralized authentication system. (PostgresSQL, ReactJS, Nodejs/ExpressJs, Digital Ocean)",
                "Engaged in a Survey Management web and admin application. (PostgresSQL, Nodejs/ExpressJs, React JS/Redux, Digital Ocean)",
                "Engaged in a project to implement trace web and admin application(PostgresSQL, Nodejs/ExpressJs, React JS/Redux, Digital Ocean)",
                "Engaged in a project to implement trace mobile app application(Flutter)",
                "Engaged in a project to implement data sync command line application(Python, OAuth, Docker)",
                "Engaged in a project to implement google analytics (Python, OAuth, Google Analytics)",
                "Manasa Project (PostgresSQL, ReactJS, Nodejs/ExpressJs, Digital Ocean)",
                "Worked under an Agile Environment.",
                "Deployment and maintaing of the projects",
              ]}
            />
            <Resumecontent
              title="Undergraduate Trainee - IFS Research & Development (Pvt) Ltd"
              date="November 2018 - October 2019"
              content={[
                "Engaged in a project to convert desktop application to a web and mobile application",
                "Engaged in a project to convert MS Installer • to WIX Installer",
                "Worked with Oracle PL/SQL.",
                "Worked under an Agile Environment",
                "Worked with JIRA",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B. SC IN INFORMATION TECHNOLOGY [Sri Lanka Institute Of Information Technology] "
              date="2017 - 2020"
              content={[`WGPA: 3.48`]}
            />

            <Resumecontent
              title="M. SC IN CYBER SECURITY [Sri Lanka Institute Of Information Technology] "
              date="2021 - Present"
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="AWS Machine Learning scholarship [Udacity] "
              date="2021 - Present"
            />
            <Resumecontent
              title="AWS Fundamentals: Going Cloud-Native [Coursera] "
              date="August 2020 - No expiration"
              content={[ "https://coursera.org/share/1761264dd5b0becc2f7e3beeeaa66823" ]}
            />
            <Resumecontent
              title="Getting Started with Google Kubernetes Engine [Coursera] "
              date="October 2020 - No expiration"
              content={[ "https://coursera.org/share/bcd7d1b87638e620bb054f7006235483" ]}
            />
            <Resumecontent
              title="The Complete SQL Course 2020: Become a MYSQL Master [Udemy] "
              date="September 2020 - No expiration"
              content={[ "https://www.udemy.com/certificate/UC-07381592-aa69-4446-9821-999dac48a1ae/" ]}
            />
            <Resumecontent
              title="Building Serverless Apps on AWS [LinkedIn] "
              date="September 2020 - No expiration"
              content={[ "http://www.linkedin.com/learning/building-serverless-apps-onaws-2?trk=flagshiplil_details_certification&trk=lil_details_certification" ]}
            />
            <Resumecontent
              title="Serverless and Microservices for AWS [LinkedIn] "
              date="September 2020 - No expiration"
              content={[ "http://www.linkedin.com/learning/serverless-and-microservicesfor-aws?trk=flagshiplil_details_certification&trk=lil_details_certification" ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
