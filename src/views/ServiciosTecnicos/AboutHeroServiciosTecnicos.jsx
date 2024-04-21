import React from "react";
import {
  AboutHeroServiciosTecnicosItem,
  AboutHeroServiciosTecnicosStyledImage,
  AboutHeroServiciosTecnicosText,
  AboutHeroServiciosTecnicosWrapper,
  ContentWrapper,
} from "../../assets/styles/ServiciosTecnicos/AboutHeroServiciosTecnicos/aboutHeroServiciosTecnicos.jsx";
import AboutAboutHeroServiciosTecnicosData from "../../assets/data/ServiciosTecnicos/AboutHeroServiciosTecnicos.js";
const AboutHeroServiciosTecnicos = () => {
  return (
    <AboutHeroServiciosTecnicosWrapper>
      <ContentWrapper>
        {AboutAboutHeroServiciosTecnicosData.map(({ image, alt }) => (
          <AboutHeroServiciosTecnicosItem key={alt}>
            <AboutHeroServiciosTecnicosStyledImage src={image} alt={alt} />
          </AboutHeroServiciosTecnicosItem>
        ))}
        <AboutHeroServiciosTecnicosText>
          Además de reparar y dar mantenimiento a equipo de cocina, también:
          <br />
          Destapamos Coladeras, Caños, Fregaderos, Tinas, W.C., Drenajes,
          Limpiamos trampas de grasa, Entre otros
        </AboutHeroServiciosTecnicosText>
      </ContentWrapper>
    </AboutHeroServiciosTecnicosWrapper>
  );
};

export default AboutHeroServiciosTecnicos;
