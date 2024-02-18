import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/ismail-selise-resume.pdf";
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
              title="Software Engineer (Frontend) at Neurocare.AI"
              date="October 2023 - Present"
              content={[
                "I have been working with Neurocare.AI since 2023. Its a startup with cutting edge tech and a great team of engineers all around the world.",
              ]}
            />
            <Resumecontent
              title="Worked as a software Engineer intern at Selise Digital Platform"
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
                "I have solved many challenges in the free code camp bootcamp that enriched my knowledge and inspired me to be a natural problem solver.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bangladesh University of Professionals"
              date="2020 - Present"
              content={[`CGPA: 3.42`]}
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
                "Inter department Coding top participant",
                "Participant in National Blockchain Olympiad 2020",
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
