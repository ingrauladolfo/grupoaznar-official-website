import React from "react";
import {
  HeroEquipacionCocinaContentWrapper,
  HeroEquipacionCocinaItem,
  HeroEquipacionCocinaStyledImage,
  HeroEquipacionCocinaText,
  HeroEquipacionCocinaTitle,
  HeroEquipacionCocinaWrapper,
} from "../../assets/styles/EquipacionCocina/heroEquipacionCocinaStyles";
import HeroEquipacionCocinaData from "../../assets/data/EquipacionCocina/HeroEquipacionCocinaData";
const HeroEquipacionCocina = () => {
  return (
    <HeroEquipacionCocinaWrapper>
      <HeroEquipacionCocinaTitle>Equipación Cocina</HeroEquipacionCocinaTitle>
      <HeroEquipacionCocinaContentWrapper>
        <HeroEquipacionCocinaText>
          Sabemos lo que necesitas, y estamos preparados para equipar tu cocina
          y llenar tus expectativas.
        </HeroEquipacionCocinaText>
        {HeroEquipacionCocinaData.map(({ image, alt }) => (
          <HeroEquipacionCocinaItem key={alt}>
            <HeroEquipacionCocinaStyledImage src={image} alt={alt} />
          </HeroEquipacionCocinaItem>
        ))}
        <HeroEquipacionCocinaText>
          Sabemos lo que necesitas y podemos ayudarte a conseguirlo, de manera
          mas facil y con la mejor calidad al lado de nuestros expertos.
        </HeroEquipacionCocinaText>
      </HeroEquipacionCocinaContentWrapper>
    </HeroEquipacionCocinaWrapper>
  );
};

export default HeroEquipacionCocina;
