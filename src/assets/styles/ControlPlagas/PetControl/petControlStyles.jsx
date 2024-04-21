import styled from "styled-components";

// Estilos para el contenedor principal de los servicios
export const PetControlWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0;
  background-color: #fffefc;
`;

// Estilos para cada elemento individual (imagen y texto)
export const PetItem = styled.div`
  width: calc(25% - 10px); /* 4 elementos por fila en pantallas móviles */
  margin-bottom: 20px;
  margin-top: 20px;

  text-align: center; /* Centrar el contenido */

  @media (max-width: 1024px) {
    width: calc(
      33.33% - 10px
    ); /* 3 elementos por fila en pantallas de tablet */
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* 2 elementos por fila en pantallas móviles */
  }

  @media (max-width: 480px) {
    width: 100%; /* 1 elemento por fila en pantallas muy pequeñas */
  }
`;

// Estilos para la imagen
export const StyledImage = styled.img`
  width: 75%;
  height: auto;
`;
export const PetText = styled.p`
  color: #1e1e1e;
  font-size: 2rem;
`;
