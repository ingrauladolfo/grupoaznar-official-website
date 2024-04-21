import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PhoneLink = ({ contact }) => {
  const isPhoneNumber = /^\d+$/.test(contact); // Verifica si el contacto parece ser un número de teléfono

  // Si es un número de teléfono, crea un enlace de teléfono, de lo contrario, crea un enlace de correo electrónico
  return isPhoneNumber ? (
    <a
      href={`tel:${contact}`}
      style={{ color: "#FFFEFC", fontSize: "inherit" }}
    >
      <FontAwesomeIcon
        icon={faPhone}
        style={{ marginRight: "5px", marginLeft: "10px", color: "#FFFEFC" }}
      />
      {contact}
    </a>
  ) : (
    <a
      href={`mailto:${contact}`}
      style={{ color: "#FFFEFC", fontSize: "inherit" }}
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{ marginRight: "5px", marginLeft: "10px", color: "#FFFEFC" }}
      />
      {contact}
    </a>
  );
};

export default PhoneLink;
