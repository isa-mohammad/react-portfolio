import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import emotion from "../../Assets/ict.png";
import chat from "../../Assets/chat.png";
import editor from "../../Assets/Projects/coffee shop/dash.png";
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
              title="Angular e-commerce"
              description="An E-commerce app which includes serverside pagination and sorting made with Angular and typescript, MongoDB as database, Express as backend. Authentication and authorization will be added later on with express backend."
              link="https://data-table-app.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              git="https://github.com/Isa-Ismail/chat-app"
              isBlog={false}
              title="A real time chat application"
              description="I developed this chat application in which any one can login and register to use the application. All of the operations of real time messages and authentication is configured and integrated with firebase."
              link="https://chatty-react.vercel.app/"
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
