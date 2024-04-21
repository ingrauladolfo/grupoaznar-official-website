import { AboutAccordionWrapper } from "../../assets/styles/LandingPage/About/aboutAccordionStyles";
import { Accordion } from "./Accordion";
import React from "react";
const AboutAccordion = ({ items }) => {
  return (
    <AboutAccordionWrapper>
      <Accordion items={items} />
    </AboutAccordionWrapper>
  );
};
export default AboutAccordion;
