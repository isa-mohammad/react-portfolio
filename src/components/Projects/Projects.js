import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import emotion from "../../Assets/ict.png";
import editor from "../../Assets/Projects/coffee shop/dash.png";
import chatify from "../../Assets/Projects/mentme.png";

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
              title="Online mentorship platform"
              description="Online mentorship platform where thousands of teacher and students can collaborate to learn and teach spontaneously."
              link="https://mentme.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Angular e-commerce"
              description="An E-commerce app which includes serverside pagination and sorting made with Angular and typescript, MongoDB as database, Node js as backend"
              link="https://data-table-app.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Department website of my university"
              description="I developed the website of our department using NEXT js, mongoDB, tailwind CSS and deployed it in vercel."
              link="https://website-of-ict-department.vercel.app/"
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
