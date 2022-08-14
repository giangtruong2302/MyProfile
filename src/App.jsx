import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Nav from "./components/Nav/nav";
import Portfolio from "./components/Portfolio/portfolio";
import Service from "./components/Services/service";
import Testimanial from "./components/testimanials/testimanial";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { Switch } from "antd";
import "antd/dist/antd.css";

const App = () => {
  const [theme, setTheme] = useState(0);

  return (
    <>
      <div className="btn-change-theme">
        <Switch
          checkedChildren={<BsFillCloudSunFill />}
          unCheckedChildren={<BsFillCloudMoonFill />}
          defaultChecked
          onClick={() => setTheme(theme === 0 ? 1 : 0)}
        />
      </div>
      {theme === 1 ? (
        <div style={{ backgroundColor: "rgb(226 225 215)" }}>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Service />
          <Portfolio />
          <Testimanial />
          <Contact />
          <Footer />
        </div>
      ) : (
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
      )}
    </>
  );
};
export default App;
