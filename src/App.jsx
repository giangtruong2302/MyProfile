import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Nav from "./components/Nav/nav";
import Portfolio from "./components/Portfolio/portfolio";
import Service from "./components/Services/service";
import Testimanial from "./components/testimanials/testimanial";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimanial />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
