import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeroContainer = styled.main`
  width: 100%;
  margin: 0;
  text-align: center;
`;
export const HeroContainerBg = styled.section`
  padding: 80px 0;
  background-color: #fffefc;
  max-width: 100%;
  margin: 0 auto;
  height: auto;
  width: 100vw;
`;
export const HeroContent = styled.div`
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
export const HeroLogo = styled.img`
  width: 300px;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media (max-width: 650px) {
    width: 150px;
  }
`;
export const HeroTextContainer = styled.div`
  width: 500px;
  @media (max-width: 650px) {
    text-align: center;
    width: 100%;
  }
`;
export const HeroHeaderText = styled.h1`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  white-space: nowrap;
`;
export const HeroHeaderSubTextP = styled.p`
  font-size: 1rem;
  color: #1e1e1e;
  font-weight: semibold;
`;
export const HeroTextSpan = styled.span`
  font-size: 1rem;
  font-weight: semibold;
  display: block;
  color: #1e1e1e;
`;
export const HeroButton = styled.a`
  margin: 0 auto;
  margin-top: 20px;
  display: table;
  cursor: pointer;
`;
export const HeroContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #eae1d5;
  color: #000000;
  transition-duration: 0.3s;
  border: 4px solid #000000;
  &:hover {
    background-color: #000000;
    color: #cfd5dc;
  }
`;
export const HeroSpanContentButton = styled.span`
  line-height: 20px;
  display: flex;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const HeroImage = styled.img`
  width: 100vw;
  height: auto;
  display: block;
  margin-left: -470px;
  visibility: ${(props) =>
    props.showSidebar
      ? "hidden"
      : "visible"}; /* Oculta la imagen cuando showSidebar es true */

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-rigth: 1500px;
  }
  @media (max-width: 800px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -150px;
  }
  @media (max-width: 720px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -112px;
  }
  @media (max-width: 640px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -35px;
  }
  @media (max-width: 600px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -30px;
  }
  @media (max-width: 420px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -20px;
  }
  @media (max-width: 390px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -20px;
  }
  @media (max-width: 370px) {
    width: 100vw;
    height: auto;
    display: block;
    margin-left: -20px;
  }
`;
