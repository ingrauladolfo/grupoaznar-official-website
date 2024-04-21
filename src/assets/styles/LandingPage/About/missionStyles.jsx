import styled from "styled-components";

// Estilos para el contenedor principal de la Misión
export const MissionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eceef2;
`;

// Estilos para el contenedor de la imagen
export const ImageContainer = styled.div`
  flex: 1;
`;

// Estilos para el contenedor del contenido
export const ContentContainer = styled.div`
  flex: 2;
`;
export const MissionContent = styled.div`
  color: #1e1e1e;
  line-height: 1.5;
  font-size: 2.25rem;
  /* Agrega otros estilos según sea necesario */
`;
export const MissionImage = styled.img`
  /* Agrega estilos según sea necesario */
  width: 100%; /* Por ejemplo */
  height: auto; /* Por ejemplo */
`;
