import React from "react";
import "./Services.css";
import { GiSpiderWeb, GiAbstract061, GiDiagram } from "react-icons/gi";

function Services() {
  const serviceList = [
    {
      icon: <GiSpiderWeb />,
      title: "Web Development",
    },
    {
      icon: <GiAbstract061 />,
      title: "Web Design",
    },
    {
      icon: <GiDiagram />,
      title: "Consultancy",
    },
  ];

  return (
    <div className="services-container">
      <h2>Services that I provide</h2>
      <div className="service-cards-container">
        {serviceList.map(({ icon, title }) => (
          <div className="service-card">
            <div className="service-card-icon">{icon}</div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
