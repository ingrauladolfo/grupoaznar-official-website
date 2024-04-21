import React from "react";
import {
  AvalaControlCard,
  AvalaControlCardContainer,
  AvalaControlContainer,
  AvalaControlDescription,
  AvalaControlHeader,
  BuyButton,
  CardDescription,
  CardDescriptionWrapper,
  CardTitle,
} from "../../assets/styles/ControlPlagas/AvalaControl/avalaControlStyles";

const AvalaControl = () => {
  return (
    <AvalaControlContainer>
      <AvalaControlHeader>Esto nos avala</AvalaControlHeader>
      <AvalaControlDescription>
        Algunas cosas de lo que nos avala
      </AvalaControlDescription>
      <AvalaControlCardContainer>
        <AvalaControlCard>
          <CardDescriptionWrapper>
            <CardDescription>Licencias</CardDescription>
            <CardDescription>Certificaciones</CardDescription>
            <CardDescription>Y más</CardDescription>
          </CardDescriptionWrapper>
          <BuyButton href="/control-plagas/lo-que-nos-avala">Conoce</BuyButton>
        </AvalaControlCard>
      </AvalaControlCardContainer>
    </AvalaControlContainer>
  );
};

export default AvalaControl;
