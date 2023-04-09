import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web App Developer",
          "Frontend framework: React, Next js and Angular",
          "Database: MySql, MongoDB, Postgre SQL",
          "Backend framework: Node with express",
          "ORM: Prisma, Mongoose",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
