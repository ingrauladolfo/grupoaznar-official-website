import styled from "styled-components";

export const AboutAccordionWrapper = styled.div`
  /* Estilos específicos para el componente AboutAccordion */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
