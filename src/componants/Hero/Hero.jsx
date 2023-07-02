import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerwidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find variety of properties that suit you very well
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="numbers">
              {/*1*/}
              <div className="flexColStart stat">
                <span>
                  <CountUp start={8800} end={9165} duration={3} />
                </span>

                <span> Product</span>
              </div>
              <div className="flexColStart stat">
                <span>
                  <CountUp start={1200} end={3641} duration={4} />
                </span>

                <span>Constomers</span>
              </div>
              <div className="flexColStart stat">
                <span>
                  <CountUp end={42} duration={4.5} />
                </span>

                <span>Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* right sec */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "ease-in" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
