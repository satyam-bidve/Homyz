import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./tower.png" alt="img comp" />
        <img src="./prologis.png" alt="img comp" />
        <img src="./equinix.png" alt="img comp" />
        <img src="./realty.png" alt="img comp" />
      </div>
    </section>
  );
};

export default Company;
