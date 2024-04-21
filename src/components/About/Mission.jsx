import React from "react";
import { accordionItems } from "../../assets/data/accordionItems";
import {
  ContentContainer,
  ImageContainer,
  MissionContent,
  MissionImage,
  MissionWrapper,
} from "../../assets/styles/LandingPage/About/missionStyles";
import missionAbout from "/assets/img/About/missionAbout.webp";
// Componente Mission
const Mission = () => {
  const firstItemContent = accordionItems[0].content;

  return (
    <MissionWrapper>
      {/* Contenedor de la imagen */}
      <ImageContainer>
        <MissionImage src={missionAbout} />
      </ImageContainer>
      &nbsp; &nbsp; &nbsp;
      {/* Contenedor del contenido */}
      <ContentContainer>
        <MissionContent>{firstItemContent}</MissionContent>
      </ContentContainer>
    </MissionWrapper>
  );
};

export default Mission;
