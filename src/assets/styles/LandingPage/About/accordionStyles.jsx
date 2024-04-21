import styled from "styled-components";

export const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  width: 100vw;
  min-height: 100vh; /* Altura mínima para ocupar toda la pantalla */
  margin-bottom: 100px;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  color: #1e1e1e;
`;

export const AccordionHeader = styled.div`
  background-color: #e0d3c2;
  padding: 10px;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  padding: 10px;
  max-height: ${(props) =>
    props.active ? "100vh" : "0"}; /* Altura máxima cuando está abierto */
  overflow: hidden;
  transition: max-height 0.3s ease; /* Transición suave */
`;
