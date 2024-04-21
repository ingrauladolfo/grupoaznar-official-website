import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionWrapper,
} from "../../assets/styles/LandingPage/About/accordionStyles";
import Mission from "./Mission";
import Evolution from "./Evolution";
import Values from "./Values";

export const Accordion = ({ items }) => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const isAccordionOpen = (index) => {
    return openIndices.includes(index);
  };
  const getContentComponent = (header) => {
    switch (header) {
      case "Misión":
        return <Mission />;
      case "Valores":
        return <Values />;
      case "Evolución":
        return <Evolution />;
      default:
        return null;
    }
  };
  return (
    <AccordionWrapper>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.header}
            <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "5px" }} />
          </AccordionHeader>
          {/* Verifica si el índice está abierto antes de mostrar el contenido */}
          {isAccordionOpen(index) && (
            <AccordionContent active={isAccordionOpen(index)}>
              {getContentComponent(item.header)}
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};
