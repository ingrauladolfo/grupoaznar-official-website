import React from "react";
import styled from "styled-components";
import { servicesControlData } from "../../assets/data/ControlPlagas/serviceControlData";
import {
  ServiceControlWrapper,
  ServiceItem,
  ServiceText,
  StyledImage,
} from "../../assets/styles/ControlPlagas/ServiceControl/serviceControlStyles";

// Componente ServiceControl
const ServiceControl = () => {
  return (
    <ServiceControlWrapper>
      {servicesControlData.map(({ image, alt }) => (
        <ServiceItem key={alt}>
          {" "}
          {/* Agrega un key único */}
          <StyledImage src={image} alt={alt} />
        </ServiceItem>
      ))}
      <ServiceText>
        Es una empresa debidamente registrada ante las leyes Mexicanas.
      </ServiceText>
    </ServiceControlWrapper>
  );
};

export default ServiceControl;
