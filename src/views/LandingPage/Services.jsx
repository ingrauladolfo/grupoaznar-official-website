import React from "react";
import styled from "styled-components";
import { servicesData } from "../../assets/data/servicesData";
import {
  ButtonContainer,
  ButtonImage,
  ButtonTitle,
  MoreInfoLink,
  ServiceButton,
  ServicesSection,
  ServicesTitle,
} from "../../assets/styles/LandingPage/Services/servicesStyles";

const Services = () => {
  return (
    <ServicesSection id="services">
      <ServicesTitle>Servicios</ServicesTitle>
      <ButtonContainer>
        {servicesData.map(({ title, alt, image, link }, index) => (
          <ServiceButton key={index}>
            <ButtonTitle>{title}</ButtonTitle>
            <ButtonImage src={image} alt={alt} />
            <MoreInfoLink to={link}>Más información</MoreInfoLink>
          </ServiceButton>
        ))}
      </ButtonContainer>
    </ServicesSection>
  );
};

export default Services;
