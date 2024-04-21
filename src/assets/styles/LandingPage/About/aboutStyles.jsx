import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: #fffefc;
  margin: 0;
  text-align: center;
`;

export const AboutContent = styled.div`
  max-width: 1350px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const AboutHeaderText = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: inherit;
  color: #000000;
  font-weight: normal;
  text-transform: uppercase;
`;
