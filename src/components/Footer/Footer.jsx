import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMap,
  faPhone,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import {
  ColumnWrapper,
  FooterText,
  FooterTextTitle,
  FooterTextWrapper,
  FooterWrapper,
  LeftColumn,
  RightColumn,
} from "../../assets/styles/Footer/footerStyles";
import PhoneLink from "./phoneLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterTextWrapper>
        {/* Wrapper añadido */}
        <FooterTextTitle>Medios de contacto</FooterTextTitle>
      </FooterTextWrapper>
      <ColumnWrapper>
        <LeftColumn>
          <FooterText>
            <FontAwesomeIcon
              icon={faMap}
              style={{ marginRight: "5px", marginLeft: "10px" }}
            />
            Lisboa N° 22, Col Juárez, Alcaldía Cuauhtémoc, México, DF, CP 0607
          </FooterText>
        </LeftColumn>
        <RightColumn>
          <FooterText>
            <PhoneLink contact=" protegetedelasplagas@outlook.com" />
          </FooterText>
          <FooterText>
            <PhoneLink contact="ventasaznar01df@outlook.es" />
          </FooterText>
          <FooterText>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginRight: "5px",
                marginLeft: "10px",
                color: "#FFFEFC",
              }}
            />
            Gustavo Alonso Aznar ( Gerente de Ventas)
          </FooterText>
          <FooterText>
            <PhoneLink contact="5614470724" />
            &nbsp;
            <PhoneLink contact="5523389644" />
          </FooterText>
        </RightColumn>
      </ColumnWrapper>
      <FooterText style={{ marginTop: "15px" }}>
        Todos los derechos reservados Grupo Aznar 1999 - {currentYear} &copy;
      </FooterText>
      <FooterText style={{ marginTop: "15px" }}>
        Desarrollado por ESDMX
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
