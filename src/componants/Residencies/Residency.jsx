import React from "react";
import "./Residency.css";
import { Swiper, SwiperSlide } from "Swiper/react";
import "Swiper/css";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/Common";
const Residency = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Populer Recidencies</span>
          </div>

          <Swiper {...sliderSetting}>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="homeimagfe" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residency;
