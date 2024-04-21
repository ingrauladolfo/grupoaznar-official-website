import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "/assets/img/Navbar/logo.webp";
export const NotFoundContainer = styled.main`
  width: 100%;
  margin: 0;
  text-align: center;
`;
export const NotFoundContainerBg = styled.section`
  padding: 80px 0;
  background-image: url(${bg}); /* Reemplaza '/path/to/your/image.jpg' con la ruta de tu imagen de fondo */
  width: 100%;
  height: 100%;
  background-size: cover;
`;
export const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  max-width: 1350px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
  }
  @media (max-width: 800px) {
    gap: 50px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const NotFoundLogo = styled.img`
  width: 300px;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media (max-width: 650px) {
    width: 150px;
  }
`;
export const NotFoundTextContainer = styled.div`
  width: 500px;
  @media (max-width: 650px) {
    text-align: center;
    width: 100%;
  }
`;
export const NotFoundHeaderText = styled.h1`
  font-size: 2rem;
  color: red;
  font-weight: bold;
  white-space: nowrap;
`;
export const NotFoundHeaderSubTextP = styled.h2`
  font-size: 1.5rem;
  color: red;
  font-weight: semibold;
`;

export const NotFoundButton = styled(Link)`
  margin: 0 auto;
  margin-top: 20px;
  display: table;
  cursor: pointer;
`;
export const NotFoundContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #eae1d5;
  border: 4px solid #000000;
  color: #000000;
  transition-duration: 0.3s;
  &:hover {
    background-color: #000000;
    color: #cfd5dc;
  }
`;
export const NotFoundSpanContentButton = styled.span`
  line-height: 20px;
  display: flex;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const NotFoundImage = styled.img`
  width: 60vw;
  display: block;
  margin-left: -250px;
  margin-top: 100px;
  visibility: ${(props) =>
    props.showSidebar
      ? "hidden"
      : "visible"}; /* Oculta la imagen cuando showSidebar es true */

  @media (max-width: 768px) {
    width: 100vw;

    display: block;
    margin-right: 1500px;
  }
  @media (max-width: 800px) {
    width: 100vw;

    display: block;
    margin-left: -150px;
  }
  @media (max-width: 720px) {
    width: 100vw;

    display: block;
    margin-left: -112px;
  }
  @media (max-width: 640px) {
    width: 100vw;

    display: block;
    margin-left: -35px;
  }
  @media (max-width: 600px) {
    width: 100vw;

    display: block;
    margin-left: -30px;
  }
  @media (max-width: 420px) {
    width: 100vw;

    display: block;
    margin-left: -20px;
  }
  @media (max-width: 390px) {
    width: 100vw;

    display: block;
    margin-left: -20px;
  }
  @media (max-width: 370px) {
    width: 100vw;

    display: block;
    margin-left: -20px;
  }
`;
