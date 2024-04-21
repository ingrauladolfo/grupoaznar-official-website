import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 5px;
  background-color: #fffefc;
  height: 100vh !important;
`;

export const ContactContent = styled.div`
  max-width: 1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactText = styled.a`
  border: 10px solid #128c7e;
  width: calc(
    50% - 25px
  ); /* Modificado para tener dos columnas en pantallas de escritorio */
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  @media (max-width: 950px) {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px; /* Reduce el margen superior en pantallas móviles */
  }
`;

export const ContactHeaderText = styled.h2`
  display: block;
  font-size: 2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: inherit;
  color: #000000;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;

export const ContactTextP = styled.p`
  display: block;
  margin: 1em auto;
  font-size: 1.5rem;
  color: #000000;
  text-align: center;
`;

export const ContactMapContainer = styled.div`
  width: 80%; /* Ajusta el ancho del contenedor al 100% */
  max-width: 600px; /* Establece un ancho máximo */
  margin: 20px; /* Centra el contenedor */
`;

export const ContactMap = styled.iframe`
  width: 100% /* Ajusta el ancho del iframe al 100% */
  height: 400px; /* Establece una altura fija */
`;

export const ContactLogoAndText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
