import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about";
import Cover from "./pages/cover";
import Navbaar from "./components/navbar";
import TopIcon from "./components/topIcon";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import ThemeContext from "./context/theme";
import { useState } from "react";
import Client from "./context/client";
import { ToastContainer } from "react-toastify";
function App() {
  const [theme, setTheme] = useState("light");
  const [clientMail,setClientMail] = useState({})

  const bgStyle = {
    backgroundImage:
      theme === "light"
        ? "linear-gradient(90deg, rgb(84 14 131) 0%, rgb(53 37 53) 50%, rgb(3 31 65) 100%)"
        : "linear-gradient(90deg, rgb(230 224 235) 0%, rgb(224 224 224) 50%, rgb(227 232 238) 100%)",
  };

  return (
    <div className={`App`} style={bgStyle}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Client.Provider value={{ clientMail, setClientMail }}>
          <ToastContainer />
        <TopIcon/>
        <Navbaar />
        <Cover />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact/>
        </Client.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
