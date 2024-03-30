import React from "react";
import { useTitle } from "../Effects";

const AboutUs: React.FC = () => {
  useTitle("Nomota AI - Acceptable Use")
  return (
    <div>
      <h1>About us</h1>
      <h2>Introducing the team behind Nomota AI</h2>
    </div>
  );
};

export default AboutUs;
