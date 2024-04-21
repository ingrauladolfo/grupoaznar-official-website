import React from "react";
import {
  AboutEquipacionCocinaContentWrapper,
  AboutEquipacionCocinaItem,
  AboutEquipacionCocinaStyledImage,
  AboutEquipacionCocinaText,
  AboutEquipacionCocinaWrapper,
} from "../../assets/styles/EquipacionCocina/aboutEquipacionCocinaStyles";
import AboutEquipacionCocinaUpData from "../../assets/data/EquipacionCocina/AboutEquipacionCocinaUpData";
import AboutEquipacionCocinaDownData from "../../assets/data/EquipacionCocina/AboutEquipaciónCocinaDownData";
const AboutEquipacionCocina = () => {
  return (
    <AboutEquipacionCocinaWrapper>
      <AboutEquipacionCocinaContentWrapper>
        {AboutEquipacionCocinaUpData.map(({ image, alt }) => (
          <AboutEquipacionCocinaItem key={alt}>
            <AboutEquipacionCocinaStyledImage src={image} alt={alt} />
          </AboutEquipacionCocinaItem>
        ))}
        <AboutEquipacionCocinaText>
          Aseguramos el funcionamiento del equipo, CAPACITANDO al personal
          encargado y proporcionando dos días de asistencia técnica
          personalizada.
        </AboutEquipacionCocinaText>
        {AboutEquipacionCocinaDownData.map(({ image, alt }) => (
          <AboutEquipacionCocinaItem key={alt}>
            <AboutEquipacionCocinaStyledImage src={image} alt={alt} />
          </AboutEquipacionCocinaItem>
        ))}
        <AboutEquipacionCocinaText>
          además ponemos a tu disposición un departamento de refacciones que
          cuenta con servicio inmediato.
        </AboutEquipacionCocinaText>
      </AboutEquipacionCocinaContentWrapper>
    </AboutEquipacionCocinaWrapper>
  );
};

export default AboutEquipacionCocina;
