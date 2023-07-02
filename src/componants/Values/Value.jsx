import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import { useState } from "react";
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side  */}
          <div className="image-container">
            <img src="./value.png" alt="home" />
          </div>
          {/* right side  */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give To You</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br />
              we belive the good blace to live can make your life better
            </span>

            {/**Accordian */}
            <Accordion
              allowZeroExpanded={false}
              preExpanded={[0]}
              className="accordion"
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionItemButton">
                        <AccordionItemState>
                          {({ expanded }) => {
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed");
                          }}
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
