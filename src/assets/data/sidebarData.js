// sidebarData.js
import {
  faHome,
  faMapLocation,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const sidebarData = [
  { path: "#", title: "Inicio", icon: faHome, sectionId: "home" },
  {
    path: "/#about",
    title: "¿Quiénes somos?",
    icon: faUser,
    sectionId: "about",
  },
  {
    path: "/#services",
    title: "Productos y servicios",
    icon: faTools,
    sectionId: "services",
  },
  {
    path: "/#contact",
    title: "Contacto",
    icon: faMapLocation,
    sectionId: "contact",
  },
  // Agrega más rutas y títulos según sea necesario
];

export default sidebarData;
