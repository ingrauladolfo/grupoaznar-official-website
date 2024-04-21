import styled from "styled-components";

export const HeroControlWrapper = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: #fffefc;
`;

export const HeroControlTitle = styled.h2`
  font-size: 3rem;
  color: #1e1e1e;
`;

export const HeroControlContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroControlTextColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const HeroControlText = styled.p`
  font-size: 1.2rem;
  color: #1e1e1e;
`;

export const HeroControlImageColumn = styled.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const HeroControlImage = styled.img`
  max-width: 100%;
  width: 60%;
  height: auto;
`;
