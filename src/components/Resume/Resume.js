import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/ismail.pdf";
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
              title="Working on a team to build an online educational platform"
              date="June 2022 - January 2023"
              content={[
                "I have experience with developing REST API and use it in the frontend to make really performant and robusts web apps. I have worked with a team to develop an online educational platform called mentme",
              ]}
            />
            <Resumecontent
              title="Worked as a software Engineer intern at Selise BD"
              date="November 2022 - January 2023"
              content={[
                "I have collaborated with the selise software team to develop an angular based project. Our Project was mainly workshop based. There, I had the vigor to learn new technologies and it was well appreciated.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Have taken part in the national blockchain olympiad in 2020."
              content={[
                "Have worked in the group of 5 people to work with cryptocurrency and bitcoin.",
              ]}
            />
            <Resumecontent
              title="I had a Free code camp bootcamp."
              content={[
                "I have solved many challenges in the free code camp bootcamp that enriched my knowledge and inspired me to be a developer.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bangladesh University of Professionals"
              date="2020 - Present"
              content={[`CGPA: 3.55 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="Sylhet Cadet College"
              date="2013 - 2019"
              content={["GPA 5 in all board exams."]}
            />
          
            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={[
                "Inter department Coding Festival",
                "Participant in National Blockchain Olympiad 2020",
                "I have completed a course in freecodecamp and got a certificate."
              ]}
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
