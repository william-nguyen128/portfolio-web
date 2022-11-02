import React from "react";
import "./PortfolioPage.css";
import PortfolioProjects from "../../Components/Section3/PortfolioCards/PortfolioProjects";

function PortfolioPage() {
  return (
    <div className="pp-container">
      <h1>
        Take a look at all of our projects <br /> these are all real projects
        from all over the world
      </h1>
      <PortfolioProjects />
    </div>
  );
}

export default PortfolioPage;
