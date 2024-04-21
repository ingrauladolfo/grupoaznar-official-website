import React from "react";
import {
  ContentWrapper,
  AboutHeroSolucionesItem,
  AboutHeroSolucionesStyledImage,
  AboutHeroSolucionesText,
  AboutHeroSolucionesWrapper,
} from "../../assets/styles/SolucionesMedida/AboutHeroSoluciones/aboutHeroSolucionesStyles.jsx";
import AboutHeroSolucionesData from "../../assets/data/SolucionesMedida/AboutHeroSolucionesData.js";
const AboutHeroSoluciones = () => {
  return (
    <AboutHeroSolucionesWrapper>
      <ContentWrapper>
        {AboutHeroSolucionesData.map(({ image, alt }) => (
          <AboutHeroSolucionesItem key={alt}>
            <AboutHeroSolucionesStyledImage src={image} alt={alt} />
          </AboutHeroSolucionesItem>
        ))}
        <AboutHeroSolucionesText>
          Por ello, más allá de ofrecerte los equipos y utensilios necesarios
          para el funcionamiento de tu cocina, la proyectamos, diseñamos y
          fabricamos a tu medida. Nuestro objetivo mostrarte una gama extensa de
          posibilidades para crear en ella.{" "}
        </AboutHeroSolucionesText>
      </ContentWrapper>
    </AboutHeroSolucionesWrapper>
  );
};

export default AboutHeroSoluciones;
