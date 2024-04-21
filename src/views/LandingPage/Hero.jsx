import React, { useState } from "react";
import {
  HeroButton,
  HeroContainer,
  HeroContainerBg,
  HeroContent,
  HeroContentButton,
  HeroHeaderSubTextP,
  HeroHeaderText,
  HeroImage,
  HeroSpanContentButton,
  HeroTextContainer,
  HeroTextSpan,
} from "../../assets/styles/LandingPage/Hero/heroStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import collage from "/assets/img/Hero/collageGA.webp";

const Hero = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <HeroContainer id=" ">
      <HeroContainerBg>
        <HeroContent>
          {/* <HeroLogo src={logo} /> */}
          <HeroTextContainer>
            <HeroHeaderText>¡SEAN BIENVENIDOS!</HeroHeaderText>
            <HeroImage src={collage} showSidebar={showSidebar} />
            <HeroHeaderSubTextP>
              El GRUPO AZNAR se fundó en 1999, en la Ciudad de México.
              <HeroTextSpan>
                Nos dedicamos a crear soluciones a la medida dependiendo de las
                necesidades de cada cliente.
              </HeroTextSpan>
            </HeroHeaderSubTextP>
          </HeroTextContainer>
        </HeroContent>
        <HeroButton href="#about">
          <HeroContentButton>
            <HeroSpanContentButton>
              Conócenos
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  fill: "#cfd5dc",
                  width: "20px",
                  height: "20px",
                  transitionDuration: "0.3s",
                  overflowClipMargin: "content-box",
                  overflow: "hidden",
                }}
              />
            </HeroSpanContentButton>
          </HeroContentButton>
        </HeroButton>
      </HeroContainerBg>
    </HeroContainer>
  );
};

export default Hero;
