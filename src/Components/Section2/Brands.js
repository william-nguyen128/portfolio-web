import React from "react";
import "./Brands.css";
import netflix from "../../images/brands/netflix.svg";
import nestle from "../../images/brands/Nestlé.svg";
import amexpress from "../../images/brands/am-express.svg";
import canon from "../../images/brands/canon.svg";
import figma from "../../images/brands/figma.svg";
import starbucks from "../../images/brands/starbucks.svg";

import dot from "../../images/brands-dot.svg";

function Brands() {
  const brandLogoList = [netflix, nestle, amexpress, canon, figma, starbucks];
  return (
    <div className="brands-container">
      <div className="brand-heading">
        <h2>I am proud to have these amazing brands as my clients</h2>
        <img src={dot} alt="" />
      </div>
      <div className="brand-logo-list">
        {brandLogoList.map((Logo) => (
          <div className="brand-logo-container">
            <img className="brand-logo" src={Logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
