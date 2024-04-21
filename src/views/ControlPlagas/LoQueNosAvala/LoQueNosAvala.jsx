import React from "react";
import { LoQueNosAvalaData } from "../../../assets/data/ControlPlagas/LoQueNosAvala/LoQueNosAvalaData";
import {
  LoQueNosAvalaContainer,
  LoQueNosAvalaContainerBg,
  LoQueNosAvalaDescription,
  LoQueNosAvalaTitle,
} from "../../../assets/styles/ControlPlagas/AvalaControl/LoQueNosAvalaStyles";

const LoQueNosAvala = () => {
  return (
    <LoQueNosAvalaContainer>
      <LoQueNosAvalaContainerBg>
        {LoQueNosAvalaData.map(
          ({ title, description, description2 }, index) => (
            <div key={index}>
              <LoQueNosAvalaTitle>{title}</LoQueNosAvalaTitle>
              {description && (
                <LoQueNosAvalaDescription>
                  {description}
                </LoQueNosAvalaDescription>
              )}
              {description2 && (
                <LoQueNosAvalaDescription>
                  {description2}
                </LoQueNosAvalaDescription>
              )}
              {!description && !description2 && (
                <LoQueNosAvalaDescription></LoQueNosAvalaDescription>
              )}
            </div>
          )
        )}
      </LoQueNosAvalaContainerBg>
    </LoQueNosAvalaContainer>
  );
};

export default LoQueNosAvala;
