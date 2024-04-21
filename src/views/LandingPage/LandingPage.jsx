import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default LandingPage;
