import styled from "styled-components";

export const SidebarWebsiteLogoAndBarsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
export const SidebarWebsiteContainer = styled.div`
  max-width: 1920px;
  margin: auto auto;
  width: 100vw;
  height: 100vh;
  background-color: #eef0f5;
  position: absolute; /* Cambiado */
  top: 100%; /* Cambiado */
  left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  }
  @media (max-width: 400px) {
    width: 100%;
    left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  }
`;

export const SidebarWebsiteItem = styled.div`
  background-color: #eae1d5;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #1e1e1e;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #eae1d5;
  }
`;
export const SidebarWebsiteNavText = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => (props.$isActive ? "black" : "black")};
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  &:hover {
    color: ${(props) => (props.$isActive ? "black" : "black")};
    text-decoration: ${(props) =>
      props.$isActive ? "underline" : "underline"};
  }
`;
export const SidebarWebsiteTextContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
  color: black;
`;

export const SidebarWebsiteCloseButton = styled.button`
  text-decoration: none;
  color: black;

  background-color: #eae1d5;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: #eae1d5;
  }
`;
