import styled from "styled-components";

// Estilos para el contenedor principal de los servicios
export const ServiceControlWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center; /* Alinear todo el contenido al centro */
  padding: 50px 0;
  background-color: #fffefc;
`;

// Estilos para cada servicio individual
export const ServiceItem = styled.div`
  width: calc(33.33% - 10px); /* Se ajusta para tener 3 elementos por fila */
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center; /* Centrar el contenido */

  @media (max-width: 768px) {
    width: 100%; /* En pantallas pequeñas, un servicio por fila */
  }
`;

// Estilos para la imagen
export const StyledImage = styled.img`
  /* Agrega estilos personalizados aquí */
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto; /* Centrar la imagen horizontalmente */
`;

export const ServiceText = styled.p`
  font-size: 2.5rem;
  color: #1e1e1e;
  margin: 0 auto;
`;
