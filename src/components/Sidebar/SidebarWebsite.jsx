import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  SidebarWebsiteCloseButton,
  SidebarWebsiteContainer,
  SidebarWebsiteItem,
  SidebarWebsiteLogoAndBarsContainer,
  SidebarWebsiteNavText,
  SidebarWebsiteTextContainer,
} from "../../assets/styles/Sidebar/sidebarWebsiteStyles";
import sidebarWebsiteData from "../../assets/data/sidebarWebsiteData";
const SidebarWebsite = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SidebarWebsiteLogoAndBarsContainer>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            marginLeft: "10px",
            color: "currentColor",
          }}
          onClick={toggleSidebar}
        />
      </SidebarWebsiteLogoAndBarsContainer>
      <SidebarWebsiteContainer $showSidebar={showSidebar}>
        {sidebarWebsiteData.map((item, index) => (
          <SidebarWebsiteItem key={index}>
            <SidebarWebsiteNavText
              href={item.path}
              onClick={() => {
                closeSidebar();
                scrollToSection(item.sectionId);
              }}
            >
              <FontAwesomeIcon icon={item.icon} size="2x" color="#000000" />
              <SidebarWebsiteTextContainer>
                {item.title}
              </SidebarWebsiteTextContainer>
            </SidebarWebsiteNavText>
          </SidebarWebsiteItem>
        ))}
        <SidebarWebsiteCloseButton onClick={closeSidebar}>
          <FontAwesomeIcon
            icon={faClose}
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        </SidebarWebsiteCloseButton>
      </SidebarWebsiteContainer>
    </>
  );
};

export default SidebarWebsite;
