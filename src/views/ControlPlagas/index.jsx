import React from "react";
import HeroControl from "./HeroControl";
import ServiceControl from "./ServiceControl";
import PetControl from "./PetControl";
import PolizaControl from "./PolizaControl";
import AvalaControl from "./AvalaControl";

const ControlPlagas = () => {
  return (
    <>
      <HeroControl />
      <ServiceControl />
      <PetControl />
      <PolizaControl />
      <AvalaControl />
    </>
  );
};

export default ControlPlagas;
