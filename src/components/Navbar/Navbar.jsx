import React from "react";
// import Sidebar from "./Sidebar";
import {
  NavbarHeader,
  NavbarLogo,
  NavbarLogoButton,
  NavbarNav,
  NavbarTextContainer,
} from "../../assets/styles/Navbar/navbarStyles";
import logo from "/assets/img/Navbar/logo.webp";
import Sidebar from "../Sidebar/Sidebar";
import SidebarWebsite from "../Sidebar/SidebarWebsite";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  // Función para determinar si la ruta es la página de inicio ("/")
  const isHome = location.pathname === "/";
  return (
    <NavbarHeader>
      <NavbarNav>
        {isHome ? <Sidebar /> : <SidebarWebsite />}
        <NavbarTextContainer>Grupo Aznar</NavbarTextContainer>
        <NavbarLogoButton exact to="/">
          <NavbarLogo src={logo} alt="Grupo Aznar" />
        </NavbarLogoButton>
      </NavbarNav>
    </NavbarHeader>
  );
};

export default Navbar;
