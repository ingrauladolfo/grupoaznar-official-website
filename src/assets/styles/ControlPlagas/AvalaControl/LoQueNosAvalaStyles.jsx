import styled from "styled-components";
import PestControlExterminator from "/assets/img/ControlPlagas/LoQueNosAvala/PestControlExterminator.webp";

export const LoQueNosAvalaContainerBg = styled.section`
  padding: 80px 0;
  background-image: url(${PestControlExterminator});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //   max-width: 100%;
  margin: 0 auto;
  height: auto;
  width: 100vw;
`;
// Estilos para el título
export const LoQueNosAvalaTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const LoQueNosAvalaContainer = styled.main`
  width: 100%;
  margin: 0;
  text-align: center;
  background-color: #fffefc;
`;
// Estilos para la descripción
export const LoQueNosAvalaDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;
