import React from "react";
import "./PortfolioProjects.css";
import { portfolioList } from "../PortfolioList";

function PortfolioProjects({ items }) {
  const limit = items ? items : portfolioList.length;

  return (
    <div>
      <div className="projects-container">
        {portfolioList.slice(0, limit).map(({ name, img, link }) => (
          <a
            className="project-card"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="project-img-container">
              <img className="project-img" src={img} alt=""></img>
            </div>
            <div className="product-card-title">
              <h2>{name}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortfolioProjects;
