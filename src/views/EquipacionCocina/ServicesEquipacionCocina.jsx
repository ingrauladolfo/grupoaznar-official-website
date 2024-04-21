import React from "react";
import {
  ServicesEquipacionCocinaContentWrapper,
  ServicesEquipacionCocinaItem,
  ServicesEquipacionCocinaStyledImage,
  ServicesEquipacionCocinaText,
  ServicesEquipacionCocinaTitle,
  ServicesEquipacionCocinaWrapper,
} from "../../assets/styles/EquipacionCocina/servicesEquipacionCocinaStyles";
import ServicesEquipacionCocinaData from "../../assets/data/EquipacionCocina/ServicesEquipacionCocinaData";
const ServicesEquipacionCocina = () => {
  return (
    <ServicesEquipacionCocinaWrapper>
      <ServicesEquipacionCocinaTitle>
        Algunos servicios que ofrecemos
      </ServicesEquipacionCocinaTitle>
      <ServicesEquipacionCocinaContentWrapper>
        {ServicesEquipacionCocinaData.map(({ text, image, alt }) => (
          <ServicesEquipacionCocinaItem key={alt}>
            <ServicesEquipacionCocinaStyledImage src={image} alt={alt} />
            <ServicesEquipacionCocinaText>{text}</ServicesEquipacionCocinaText>
          </ServicesEquipacionCocinaItem>
        ))}
      </ServicesEquipacionCocinaContentWrapper>
    </ServicesEquipacionCocinaWrapper>
  );
};

export default ServicesEquipacionCocina;
