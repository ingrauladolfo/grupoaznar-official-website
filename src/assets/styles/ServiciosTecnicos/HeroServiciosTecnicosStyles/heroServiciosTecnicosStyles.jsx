import styled from "styled-components";

// Estilos para el contenedor principal de los servicios
export const HeroServiciosTecnicosWrapper = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: #fffefc;
`;

export const HeroServiciosTecnicosContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Estilos para cada elemento individual (imagen y texto)
export const HeroServiciosTecnicosItem = styled.div`
  width: calc(33.33% - 10px); /* 3 elementos por fila en pantallas de tablet */
  margin-bottom: 20px;
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
export const HeroServiciosTecnicosTitle = styled.h2`
  font-size: 3rem;
  color: #1e1e1e;
  margin: 0 auto;
  padding: 50px;
  text-transform: uppercase;
`;

// Estilos para la imagen
export const HeroServiciosTecnicosStyledImage = styled.img`
  width: 75%;
  height: auto;
`;
export const HeroServiciosTecnicosText = styled.p`
  font-size: 2rem;
  color: #1e1e1e;
  margin: 0 auto;
`;
