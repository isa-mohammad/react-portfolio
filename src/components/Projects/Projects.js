import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/coffee shop/shop.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
              title="Amazon Ecommerce Clone"
              description="An Ecommerce clone for Amazon made with Next js Material UI. The basic functionalities of a Next js project is implemented here. This is still under development (you can check my github repo if you want to). The payment methods will be integrated. Paypal will be used as payment method. MongoDB is used as NoSQL database"
              link="https://next-pro-max.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="A Coffee-Shop App"
              description="This is a next js application to find coffee shops nearby. In this process I used SSR SSG and other next js features to make the app performant."
              link="https://cappuccino.vercel.app/"
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
              link="https://gitbook.com"
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
