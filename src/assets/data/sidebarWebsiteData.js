// sidebarWebsiteData.js
import {
  faBug,
  faCropSimple,
  faFireBurner,
  faGear,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const sidebarWebsiteData = [
  { path: "/", title: "Inicio", icon: faHome },
  {
    path: "/control-plagas",
    title: "Control de plagas",
    icon: faBug,
  },
  {
    path: "/soluciones-medida",
    title: "Soluciones a la medida",
    icon: faCropSimple,
  },
  {
    path: "/servicios-tecnicos",
    title: "Servicios técnicos",
    icon: faGear,
  },
  {
    path: "/equipacion-cocina",
    title: "Equipación cocina",
    icon: faFireBurner,
  },
];

export default sidebarWebsiteData;
