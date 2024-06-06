import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#cfbae0" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style = {{ display: 'flex', justifyContent: 'space-between', gap: '4px'}}>
          <Button style = {{ display: 'flex', alignItems: 'center'}} variant="primary" href={props.link} target="_blank">
          {props.isBlog ? "View Blog" : <p>View Project</p>}
        </Button>
        {!props.description.includes("aizamd")&&<Button style = {{ display: 'flex', alignItems: 'center'}} variant="primary" href={props.git} target="_blank">
          {props.isBlog ? "View Blog" : <p>Github Repo</p>}
        </Button>}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
