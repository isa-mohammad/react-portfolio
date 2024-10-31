import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import emotion from "../../Assets/ict.png";
import aizamd from "../../Assets/aizamd.jpg"
import chat from "../../Assets/ict.png";
import editor from "../../Assets/radio.png";
import chatify from "../../Assets/Projects/next-pro-max.png";

import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";
import blog from "../../Assets/blog.PNG"

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
              imgPath={aizamd}
              git="https://github.com/Isa-Ismail/data-table-app"
              isBlog={false}
              title="AizaMD healthcare Application and Chrome Extension"
              description="I have worked in an AI based Startup Neurocare.AI to develop an AI based healthcare Application. AizaMD.AI is a voice-enabled solution revolutionizing radiology reporting."
              link="https://aizamd.ai/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              git="https://github.com/Isa-Ismail/next-pro-max"
              title="Amazon clone with Next js"
              description="This amazon clone app has authentication, authorization, product details, complex cart functionalities and more. Material UI is used for design and the code is very reusable for any future refactoring and redesign."
              link="https://next-pro-max.vercel.app"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              git="https://github.com/Isa-Ismail/data-table-app"
              isBlog={false}
              title="RadioView.AI Web Application"
              description="RadioView.AI automates radiology reports, integrating ICD-10 and CPT codes for accurate and efficient documentation."
              link="https://app.radioview.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              git="https://github.com/Isa-Ismail/games-mania"
              isBlog={false}
              title="An online quiz application for gamers"
              description="I developed this web application for my fellow nerd gamer friends to have fun and compete with each other. I update the quiz questions and topics based on their suggestions. You can participate in the quiz if you want."
              link="https://games-mania.vercel.app/"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link="https://medium.com/@fahimismail75.scc/programming-or-software-engineering-art-or-craft-54fe6066ee3"
              title="Software Engineering or Programming"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/"
              title="Plant AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
