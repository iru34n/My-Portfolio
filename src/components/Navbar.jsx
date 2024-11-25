import React, { useState, useEffect } from "react";
import ThemeToggle from "./sub-components/ThemeToggle";
import Menu from "./sub-components/Menu";
import logoLight from "../assets/logo-light.svg"; // Light mode logo
import logoDark from "../assets/logo-dark.svg"; // Dark mode logo
import { useTheme } from "./sub-components/ThemeProvider";

const Navbar = () => {
  const { isDarkMode } = useTheme(); // Access theme mode
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [showNavbar, setShowNavbar] = useState(true); // Controls visibility of the navbar

  // Separate functions for opening and closing the sidebar
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down - Hide Navbar
        setShowNavbar(false);
      } else {
        // Scroll Up - Show Navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-16 flex items-center justify-between p-4 bg-transparent fixed z-10 ${
        showNavbar ? "top-0" : "-top-16"
      } transition-all duration-300`}
    >
      <div>
        <img
          src={isDarkMode ? logoDark : logoLight}
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

      <div className="flex-grow flex justify-center">
        <ThemeToggle />
      </div>

      <button onClick={openSidebar} className="text-lg font-fraunces">
        Menu
      </button>

      <Menu isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Navbar;
