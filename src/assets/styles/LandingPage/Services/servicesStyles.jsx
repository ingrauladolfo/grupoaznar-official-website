import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 5px;
  background: #eceef2;
`;

export const ServicesTitle = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: inherit;
  color: #1e1e1e;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ServiceButton = styled.button`
  flex-basis: calc(
    50% - 20px
  ); /* Dos botones por fila en pantallas de escritorio */
  background-color: #d4d6df;
  border: 10px solid
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 10%, rgba(234, 225, 213, 1) 100%);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: calc(100% - 20px); /* Un botón por fila en pantallas móviles */
  }
`;

export const ButtonTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

export const ButtonImage = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
`;

export const MoreInfoLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #1e1e1e;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #1e1e1e;
  }

  &:focus {
    color: #1e1e1e;
  }
`;
