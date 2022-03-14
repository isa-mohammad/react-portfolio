import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#21d521",
    grade3: "#1db61d",
    grade2: "#1e991e",
    grade1: "#1d861d",
    grade0: "black",
  };
  return (
    <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="isa-ismail"
        blockSize={12}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
