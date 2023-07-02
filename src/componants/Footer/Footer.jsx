import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-conatiner">
          {/*Left Side of footer */}
          <div className="flexColStart f-left">
            <img src="./logo2.png" alt="floho" width={120} />
            <span className="secondaryText">
              Our vison is to make the place to live happly
              <br /> for all the people.
              <br />
              We are a team with passionate and
              <br /> dedicated members who love what they do.
              <br />
            </span>
          </div>
          {/**Right Side  */}
          <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">
              FL130 , modelcolony , skytown , Asgard
            </span>
            <div className="flexCenter f-manu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About US</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
