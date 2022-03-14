import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Frontend framework: React with Next js",
          "Database: MySql, MongoDB, Postgre SQL",
          "Backend framework: Node with express",
          "Stack: I am fluent using MERN stack"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
