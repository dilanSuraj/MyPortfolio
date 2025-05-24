import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementContent from "./AchievementContent";

function Achievements() {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <Container fluid className="resume-section flex-fill">
        {/* <Particle /> */}
        <Container>
          <Row className="resume">
            <Col className="resume-left">
              <h3 className="resume-title">Achievements</h3>
              <AchievementContent
                content={[
                  "Completed and handed over the Hashtag Generation admin application ahead of schedule",
                  "Executed successful database migration from Excel to PostgreSQL using automated scripts to improve data management.",
                  "Expertly developed and implemented cloud-based serverless applications that efficiently handle high - traffic workloads.",
                  "Fixed a prolonged issue with complex booking pattern matching, significantly minimizing the algorithm's complexity and improving overall performance.",
                  "Optimized a high-memory-consuming webhook handling 10, 000 + requests, reducing syncing time from 1 hour to 15 minutes by implementing best practices."
                ]}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Achievements;