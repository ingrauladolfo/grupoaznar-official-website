import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarHeader = styled.header`
  max-width: 100%;
  margin: 0 auto;
  display: block;
  background-color: #061a4e;
  position: fixed;
  width: 100vw;
`;
export const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
  }
`;
export const NavbarTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 10px;
  color: #fffefc;
`;
export const NavbarLogo = styled.img`
  height: 50px;
  margin: 10px 0;
  overflow: clip;
  overflow-clip-margin: content-box;
`;
export const NavbarLogoButton = styled(Link)`
  text-decoration: none;
  color: #7a70b3;
`;
