import styled from "styled-components";

export const AvalaControlContainer = styled.div`
  padding: 20px;
  background-color: #fffefc;
  text-align: center; /* Añadido para centrar AvalaControlHeader y AvalaControlDescription */
`;

export const AvalaControlHeader = styled.h2`
  display: block;
  font-size: 2rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: inherit;
  color: #1e1e1e;
  font-weight: normal;
  text-transform: uppercase;
`;

export const AvalaControlDescription = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.5rem;
  color: #1e1e1e;
`;

export const AvalaControlCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    flex-direction: row;
  }
`;

export const AvalaControlCard = styled.div`
  background-color: #eeeff2;
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 5px;
  color: #1e1e1e;
  border-radius: 8px;
  @media (min-width: 769px) {
    width: calc(33.33% - 20px);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #1e1e1e;
  margin-bottom: 10px;
`;
export const CardSubTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e1e1e;
  font-weight: normal;
  margin-bottom: 10px;
`;

// Estilos para el contenedor de descripción del card
export const CardDescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Estilos para la descripción del card
export const CardDescription = styled.button`
  background-color: transparent;
  color: #1e1e1e;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 120px; /* Ancho mínimo para el botón */

  &:hover {
    background-color: #1e1e1e;
    color: #fffefc;
  }

  /* Estilos para pantallas de escritorio */
  @media screen and (min-width: 768px) {
    width: calc(35% - 10px);
  }

  /* Estilos para tablets */
  @media screen and (max-width: 767px) {
    width: calc(50% - 10px);
  }

  /* Estilos para pantallas móviles */
  @media screen and (max-width: 480px) {
    width: calc(100% - 10px);
  }
`;

export const CardCost = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

export const BuyButton = styled.a`
  background-color: transparent;
  color: #1e1e1e;
  padding: 10px 15px;
  border: 4px solid #e0d3c2;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #1e1e1e;
    color: #fffefc;
    border: 4px solid #1e1e1e;
  }
`;
