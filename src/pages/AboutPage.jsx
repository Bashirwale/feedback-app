import React from "react";
import Card from "../component/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div>
        <h1>About this project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>version: 1.0.0</p>
        <p>
          <Link to="/">Back home</Link>
        </p>
      </div>
      ;
    </Card>
  );
}

export default AboutPage;
