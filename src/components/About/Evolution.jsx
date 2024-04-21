import React from "react";
import { accordionItems } from "../../assets/data/accordionItems";
import {
  ContentContainer,
  ImageContainer,
  EvolutionContent,
  EvolutionImage,
  EvolutionWrapper,
} from "../../assets/styles/LandingPage/About/evolutionStyles";
import evolutionAbout from "/assets/img/About/evolutionAbout.webp";
// Componente Evolution
const Evolution = () => {
  const firstItemContent = accordionItems[2].content;

  return (
    <EvolutionWrapper>
      {/* Contenedor de la imagen */}
      <ImageContainer>
        <EvolutionImage src={evolutionAbout} />
      </ImageContainer>
      &nbsp; &nbsp; &nbsp;
      {/* Contenedor del contenido */}
      <ContentContainer>
        <EvolutionContent>{firstItemContent}</EvolutionContent>
      </ContentContainer>
    </EvolutionWrapper>
  );
};

export default Evolution;
