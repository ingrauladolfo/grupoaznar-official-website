import React from "react";
import { HeroSolucionesData } from "../../assets/data/SolucionesMedida/herosolucionesData";
import {
  ContentWrapper,
  HeroSolucionesItem,
  HeroSolucionesStyledImage,
  HeroSolucionesText,
  HeroSolucionesWrapper,
  Title,
} from "../../assets/styles/SolucionesMedida/HeroSoluciones/heroSolucionesStyles.jsx";

const HeroSoluciones = () => {
  return (
    <HeroSolucionesWrapper>
      <Title>Soluciones a la medida</Title>
      <ContentWrapper>
        {HeroSolucionesData.map(({ image, alt }) => (
          <HeroSolucionesItem key={alt}>
            <HeroSolucionesStyledImage src={image} alt={alt} />
          </HeroSolucionesItem>
        ))}
        <HeroSolucionesText>
          Sabemos lo que necesitas, y estamos preparados para equipar tu cocina
          y llenar tus expectativas.
        </HeroSolucionesText>
      </ContentWrapper>
    </HeroSolucionesWrapper>
  );
};

export default HeroSoluciones;
