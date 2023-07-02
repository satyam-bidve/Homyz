import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <>
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Get started</span>
            <span className="secondaryText">
              subscrie and find super attractive price quotes from here
              <br />
              Find your recidance soon{" "}
            </span>
            <button className="button">
              <a href="mailto:satyambidve@gmail.com">Get Started</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
