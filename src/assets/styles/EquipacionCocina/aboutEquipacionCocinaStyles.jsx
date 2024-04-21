import styled from "styled-components";

// Estilos para el contenedor principal de los servicios
export const AboutEquipacionCocinaWrapper = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: #fffefc;
`;

export const AboutEquipacionCocinaContentWrapper = styled.div`
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
export const AboutEquipacionCocinaItem = styled.div`
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

// Estilos para la imagen
export const AboutEquipacionCocinaStyledImage = styled.img`
  width: 75%;
  height: auto;
  margin: 25px auto;
`;
export const AboutEquipacionCocinaText = styled.p`
  font-size: 2rem;
  color: #1e1e1e;
  margin: 0 auto;
`;
