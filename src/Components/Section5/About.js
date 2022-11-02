import React from "react";
import "./About.css";
import avatar from "../../images/about.jpg";

function About() {
  return (
    <div className="about-me-container">
      <h2>
        Let's Book a call, <br /> So that we can discuss about your next step:
      </h2>
      <div className="about-me-content">
        <div className="about-me-avatar">
          <img src={avatar} alt=""></img>
          <p>
            <strong>nguyenhongquan2k@gmail.com:</strong> I am an undergraduate
            majoring in Computer Science. My interest lies in Web Development
            and System Design. I would be delighted to join in any projects to
            improve myself regarding Web Development and/or System Design.
          </p>
        </div>
      </div>
      <div className="about-me-calendar">calendy</div>
    </div>
  );
}

export default About;
