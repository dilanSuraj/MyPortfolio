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
              title="Senior Software Engineer - Harver, recruited by Gapstars, Colombo"
              date="October 2022 - Present"
              content={[
                "Reduced project delivery time by 75% through the development of marketplace integrations that can be set up with a few clicks",
                "Increased client base significantly by building Workday application tracking system integration.",
              ]}
            />
            <Resumecontent
              title="Software Engineer - Rootcode Labs, Colombo"
              date="August 2021 - October 2022"
              content={[
                "Completed and handed over the Hashtag Generation admin application",
                "Fixed a prolonged issue with complex booking pattern matching and reduce the complexity of the algorithm to a minimum. ",
                "Reduced project delivery time by 75% through the development of a simplified booking pattern that can be set up with a few clicks and with a demo",
                "DB migration from Excel to PostgreSQL with automated scripts"
              ]}
            />
            <Resumecontent
              title="Software Engineer - Circles.Life, recruited by Zone24x7, Colombo"
              date="January 2021 - August 2021"
              content={[
                "I am responsible for implementing the functional requirements of the application that handles high traffic.",
                "Increased client base significantly by building a Family Plan package",
                "Roles played - Backend, Frontend, Deployment",
              ]}
            />
            <Resumecontent
              title="Full-Stack Software Engineer - Half Life (Private) Limited"
              date="January 2020 - January 2021"
              content={[
                "Completed centralized authentication system connecting multiple applications across different platforms",
                "Increased client base significantly by building a survey application that can be reusable with multiple client applications"
              ]}
            />
            <Resumecontent
              title="Undergraduate Trainee - IFS Research & Development (Pvt) Ltd"
              date="November 2018 - October 2019"
              content={[
                "Converted the existing MS installer with a WIX installer and improved the performance, scalability, and user experience of the application",
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
