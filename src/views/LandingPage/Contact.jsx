import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactHeaderText,
  ContactLogoAndText,
  ContactText,
  ContactTextP,
  ContactMapContainer, // Agregado
  ContactMap, // Agregado
} from "../../assets/styles/LandingPage/Contact/contactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeaderText>Localízanos</ContactHeaderText>
      <ContactContent>
        {/* Sección de texto */}
        <ContactText
          href="https://wa.me/5614470724?text=Me%20interesa%20contactarlos"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              alignSelf: "center",
              marginTop: "10px",
              marginBottom: "-10px",
              width: "44px",
              height: "44px",
              color: "#00E676",
            }}
          />

          <ContactTextP>Envíanos un mensaje de WhatsApp</ContactTextP>
        </ContactText>

        {/* Sección del mapa */}
        <ContactLogoAndText>
          <ContactMapContainer>
            {/* Agregado */}
            <ContactMap // Agregado
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5793865433066!2d-99.16049692308665!3d19.430571235045594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2d6bd962a9%3A0x6cda009c9c5850db!2sCalle%20Lisboa%2022%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ju%C3%A1rez%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1712004853286!5m2!1ses-419!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ContactMapContainer>
          {/* Agregado */}
        </ContactLogoAndText>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
