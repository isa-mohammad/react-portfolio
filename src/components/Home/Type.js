import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Frontend framework: REACT",
          "Database: MySql, MongoDB",
          "Backend framework: Node with express",
          "Stack: According to project requirements, but I am Fluent using MERN stack."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
