import React from "react";
import HeroServiciosTecnicosData from "../../assets/data/ServiciosTecnicos/HeroServiciosTecnicoData";
import {
  HeroServiciosTecnicosContentWrapper,
  HeroServiciosTecnicosItem,
  HeroServiciosTecnicosStyledImage,
  HeroServiciosTecnicosText,
  HeroServiciosTecnicosWrapper,
  HeroServiciosTecnicosTitle,
} from "../../assets/styles/ServiciosTecnicos/HeroServiciosTecnicosStyles/heroServiciosTecnicosStyles.jsx";

const HeroServiciosTecnicos = () => {
  return (
    <HeroServiciosTecnicosWrapper>
      <HeroServiciosTecnicosTitle>
        Servicios Técnicos
      </HeroServiciosTecnicosTitle>
      <HeroServiciosTecnicosContentWrapper>
        {HeroServiciosTecnicosData.map(({ image, alt }) => (
          <HeroServiciosTecnicosItem key={alt}>
            <HeroServiciosTecnicosStyledImage src={image} alt={alt} />
          </HeroServiciosTecnicosItem>
        ))}
        <HeroServiciosTecnicosText>
          Estamos preparados para lo que necesites, contamos con personal
          capacitado para darte soluciones y mantenimientos.
        </HeroServiciosTecnicosText>
      </HeroServiciosTecnicosContentWrapper>
    </HeroServiciosTecnicosWrapper>
  );
};

export default HeroServiciosTecnicos;
