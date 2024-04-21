import React from "react";
import { accordionItems } from "../../assets/data/accordionItems";
import {
  ValueButton,
  ValuesContainer,
} from "../../assets/styles/LandingPage/About/valuesStyles";

const Values = () => {
  // Obtener el contenido del segundo item (index 1) de accordionItems
  const firstItemContent = accordionItems[1].content;

  // Dividir el contenido por comas para obtener cada valor
  const values = firstItemContent.split(",").map((value) => value.trim());

  return (
    <ValuesContainer>
      {/* Mapear cada valor y renderizarlo como un botón */}
      {values.map((value, index) => (
        <ValueButton key={index}>{value}</ValueButton>
      ))}
    </ValuesContainer>
  );
};

export default Values;
