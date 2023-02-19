import React from "react";
import { About, Contact, Footer, Hero, Navbar, Project } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
