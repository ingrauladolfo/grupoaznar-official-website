import styled from "styled-components";

export const PolizasControlContainer = styled.div`
  padding: 20px;
  background-color: #fffefc;
  text-align: center; /* Añadido para centrar PolizasControlHeader y PolizasControlDescription */
`;

export const PolizasControlHeader = styled.h2`
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

export const PolizasControlDescription = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.5rem;
  color: #1e1e1e;
`;

export const PolizasControlCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    flex-direction: row;
  }
`;

export const PolizasControlCard = styled.div`
  background-color: #e0d3c2;
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

export const CardDescription = styled.p`
  font-size: 1em;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

export const CardCost = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

export const BuyButton = styled.a`
  background-color: #e0d3c2;
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
