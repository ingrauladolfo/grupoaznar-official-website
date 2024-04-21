import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #061a4e;
  color: #fff;
  text-align: center;
  width: 1441;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a una columna en pantallas móviles */
  }
`;

export const FooterTextWrapper = styled.div`
  margin-bottom: 20px; /* Ajusta el espacio entre FooterTextTitle y ColumnWrapper */
`;

export const LeftColumn = styled.div`
  flex: 1;
  margin-left: -30px; /* Ajusta el margen para compensar */
  margin-bottom: 15px; /* Agrega espacio entre las columnas en pantallas móviles */

  @media (max-width: 768px) {
    margin-left: 0; /* Elimina el margen izquierdo en pantallas móviles */
    margin-bottom: 0; /* Elimina el espacio entre las columnas en pantallas móviles */
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  text-align: center;
  display: grid; /* Utiliza grid layout */
  gap: 10px; /* Espacio entre los elementos */
  margin-left: 15px; /* Agrega margen izquierdo */

  @media (min-width: 769px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Dos columnas en pantallas de escritorio */
  }

  @media (max-width: 768px) {
    margin-left: 0; /* Elimina el margen izquierdo en pantallas móviles */
    text-align: center; /* Centra el texto en pantallas móviles */
  }
`;

export const FooterText = styled.p`
  color: #fffefc;
  font-size: inherit;
  margin: 0; /* Elimina el margen predeterminado */
`;

export const FooterTextTitle = styled.h2`
  font-size: 2rem;
  margin: 10px; /* Elimina el margen predeterminado */
`;
