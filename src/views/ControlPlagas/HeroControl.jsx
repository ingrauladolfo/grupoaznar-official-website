import React from "react";
import heroControl from "/assets/img/ControlPlagas/HeroControl.webp";
import {
  HeroControlContentWrapper,
  HeroControlWrapper,
  HeroControlImage,
  HeroControlImageColumn,
  HeroControlText,
  HeroControlTextColumn,
  HeroControlTitle,
} from "../../assets/styles/ControlPlagas/HeroControl/heroControlStyles";

const HeroControl = () => {
  return (
    <HeroControlWrapper>
      <HeroControlTitle>Control de Plagas</HeroControlTitle>
      <HeroControlContentWrapper>
        <HeroControlTextColumn>
          <HeroControlText>
            Somos una empresa de vanguardia en los servicios de control integral
            de plagas, ya que contamos con una amplia experiencia desde 2019.
            Sabemos lo que necesitas, y estamos preparados para mantener tus
            areas libres de cualquier tipo de plaga
          </HeroControlText>
        </HeroControlTextColumn>
        <HeroControlImageColumn>
          <HeroControlImage
            src={heroControl}
            alt="Imagen de control de plagas"
          />
        </HeroControlImageColumn>
      </HeroControlContentWrapper>
    </HeroControlWrapper>
  );
};

export default HeroControl;
