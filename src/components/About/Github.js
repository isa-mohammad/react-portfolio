import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", display: 'flex', justifyContent: 'center' }}>
         <strong style={{color: 'white'}}>My <span style={{color: 'rosybrown'}}>Github</span> Calendar</strong>
      </h1>
      <GitHubCalendar
        username="isa-ismail"
        blockSize={15}
        blockMargin={5}
        color="#4aa832"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
