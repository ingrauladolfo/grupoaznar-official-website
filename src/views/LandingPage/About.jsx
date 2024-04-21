import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutHeaderText,
} from "../../assets/styles/LandingPage/About/aboutStyles";
import AboutAccordion from "../../components/About/AboutAccordion";
import { accordionItems } from "../../assets/data/accordionItems";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <div>
          <AboutHeaderText>¿Quiénes somos?</AboutHeaderText>
          <AboutAccordion items={accordionItems} />
        </div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
