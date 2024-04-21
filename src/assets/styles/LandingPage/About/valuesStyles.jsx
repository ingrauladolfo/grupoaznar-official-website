import styled from "styled-components";

// Definir un componente de styled-components para el contenedor de los botones
export const ValuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Definir un componente de styled-components para los botones
export const ValueButton = styled.button`
  width: calc(
    33.33% - 20px
  ); /* 3 botones por fila en pantallas de escritorio */
  margin: 10px;
  background-color: #d4d6df;
  border: 9px
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 5%, rgba(234, 225, 213, 1) 100%);
  border-radius: 25px;

  top: 1738px;
  font-size: 2.25rem;
  left: calc(50% - 709px / 2 + 0.5px);
  top: 1738px;
  color: #1e1e1e;
  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 2 botones por fila en pantallas de tablet */
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px); /* 1 botón por fila en pantallas de mobile */
  }
`;
