import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/resume_fahim.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              title="Building E-commerce(integrated with paypal) and Github Social network system using MERN stack"
              date="June 2021 - January 2022"
              content={[
                "I have built two large scale projects that took me nearly a month or two. A fully functional E-commerce app and a social media app. I have used MERN stack to develop them both",
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
          
            <h3 className="resume-title">Achivements</h3>
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
