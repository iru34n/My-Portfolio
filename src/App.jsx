import React from "react";
import { ThemeProvider } from "./components/sub-components/ThemeProvider";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen">
        <Navbar />
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
