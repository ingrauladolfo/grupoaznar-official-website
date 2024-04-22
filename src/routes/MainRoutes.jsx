// MainRoutes.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routeToTitle, routeAliases } from "../assets/data/routeTitles";
import Header from "../components/global/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  About,
  Contact,
  ControlPlagas,
  EquipacionCocina,
  LandingPage,
  LoQueNosAvala,
  NotFound,
  Services,
  ServiciosTecnicos,
  SolucionesMedida,
} from "../views/index";
const MainRoutes = () => {
  useEffect(() => {
    // Función para manejar cambios en la ubicación y actualizar el título
    const handleRouteChange = () => {
      // Obtén la ruta actual
      const currentPath = window.location.pathname + window.location.hash;

      // Encuentra el título correspondiente a la ruta actual, utilizando alias si es necesario
      const title = findTitleForPath(currentPath);

      // Establece el título de la página según la ruta actual
      document.title = title || "Grupo Aznar | Not found";
    };

    // Agrega un listener para manejar cambios en la ubicación
    window.addEventListener("hashchange", handleRouteChange);

    // Llama a handleRouteChange para establecer el título inicial
    handleRouteChange();

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  // Función para encontrar el título correspondiente a la ruta actual, utilizando alias si es necesario
  const findTitleForPath = (path) => {
    // Intenta encontrar la ruta directa
    let matchingRoute = routeToTitle[path] || null;

    // Si no hay una ruta directa, busca utilizando el alias
    if (!matchingRoute) {
      const alias = routeAliases[path];
      matchingRoute = alias ? routeToTitle[alias] : null;
    }

    return matchingRoute ? matchingRoute : null;
  };

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#services" element={<Services />} />
        <Route path="/#contact" element={<Contact />} />
        <Route path="/control-plagas" element={<ControlPlagas />} />
        <Route path="/soluciones-medida" element={<SolucionesMedida />} />
        <Route
          path="/control-plagas/lo-que-nos-avala"
          element={<LoQueNosAvala />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/servicios-tecnicos" element={<ServiciosTecnicos />} />
        <Route path="/equipacion-cocina" element={<EquipacionCocina />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
