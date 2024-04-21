import React from "react";
import styled from "styled-components";
import { petControlData } from "../../assets/data/ControlPlagas/petControlData";
import {
  PetControlWrapper,
  PetItem,
  PetText,
  StyledImage,
} from "../../assets/styles/ControlPlagas/PetControl/petControlStyles";

// Componente PetControl
const PetControl = () => {
  // Determinar la cantidad de elementos por fila en función de la cantidad de datos
  let itemsPerRow = "25%"; // Por defecto, 4 elementos por fila
  if (petControlData.length <= 2) {
    itemsPerRow = "50%"; // Si hay 2 o menos elementos, 2 elementos por fila
  }
  return (
    <PetControlWrapper>
      {petControlData.map(({ image, alt, text }) => (
        <PetItem key={alt}>
          <StyledImage src={image} alt={alt} />
          <PetText>{text}</PetText>
        </PetItem>
      ))}
    </PetControlWrapper>
  );
};

export default PetControl;
