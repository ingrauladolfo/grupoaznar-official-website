import React, { useState } from "react";
import {
  NotFoundButton,
  NotFoundContainer,
  NotFoundContainerBg,
  NotFoundContent,
  NotFoundContentButton,
  NotFoundHeaderSubTextP,
  NotFoundHeaderText,
  NotFoundImage,
  NotFoundSpanContentButton,
  NotFoundTextContainer,
} from "../../assets/styles/NotFound/NotFoundStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  // faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import collage from "/assets/img/NotFound/404.webp";

const NotFound = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <NotFoundContainer>
      <NotFoundContainerBg>
        <NotFoundContent>
          <NotFoundTextContainer>
            <NotFoundImage src={collage} showSidebar={showSidebar} />

            <NotFoundHeaderText>Felicidades!!</NotFoundHeaderText>
            <NotFoundHeaderSubTextP>
              Acabas de encontrar nuestra página de error 404.
            </NotFoundHeaderSubTextP>
          </NotFoundTextContainer>
        </NotFoundContent>
        <NotFoundButton to="/">
          <NotFoundContentButton>
            <NotFoundSpanContentButton>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{
                  fill: "#cfd5dc",
                  width: "20px",
                  height: "20px",
                  transitionDuration: "0.3s",
                  overflowClipMargin: "content-box",
                  overflow: "hidden",
                }}
              />
              &nbsp; Reclamar tu premio
            </NotFoundSpanContentButton>
          </NotFoundContentButton>
        </NotFoundButton>
      </NotFoundContainerBg>
    </NotFoundContainer>
  );
};

export default NotFound;
