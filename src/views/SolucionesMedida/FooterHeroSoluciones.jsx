import React from "react";
import {
  ContentWrapper,
  FooterHeroSolucionesItem,
  FooterHeroSolucionesStyledImage,
  FooterHeroSolucionesText,
  FooterHeroSolucionesWrapper,
} from "../../assets/styles/SolucionesMedida/FooterHeroSoluciones/footerHeroSolucionesStyles.jsx";
import FooterHeroSolucionesData from "../../assets/data/SolucionesMedida/FooterHeroSolucionesData.js";

const FooterHeroSoluciones = () => {
  return (
    <FooterHeroSolucionesWrapper>
      <ContentWrapper>
        {FooterHeroSolucionesData.map(({ image, alt }) => (
          <FooterHeroSolucionesItem key={alt}>
            <FooterHeroSolucionesStyledImage src={image} alt={alt} />
          </FooterHeroSolucionesItem>
        ))}
        <FooterHeroSolucionesText>
          Aseguramos el funcionamiento del equipo, CAPACITANDO al personal
          encargado y proporcionando dos días de asistencia técnica
          personalizada.&nbsp;Además ponemos a tu disposición un departamento de
          refacciones que cuenta con servicio inmediato.
        </FooterHeroSolucionesText>
      </ContentWrapper>
    </FooterHeroSolucionesWrapper>
  );
};

export default FooterHeroSoluciones;
