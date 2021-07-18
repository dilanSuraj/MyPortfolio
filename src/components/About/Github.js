import React from "react";
import ReactGitHubCalendar from 'react-ts-github-calendar';
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <ReactGitHubCalendar userName="dilanSuraj" global_stats={true} cache={(12 * 60 * 60)*1000} responsive={true} tooltips={true}/>
    </Row>
  );
}

export default Github;
