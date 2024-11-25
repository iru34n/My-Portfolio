import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeProvider"; // Import ThemeProvider hook

const Menu = ({ isSidebarOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);
  const { isDarkMode } = useTheme(); // Access theme mode

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, closeSidebar]);

  // Smooth scroll handler
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeSidebar(); // Optional: Close sidebar after clicking
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-6 bottom-6 w-60 transform ${
        isSidebarOpen ? "translate-x-0 right-4" : "translate-x-full right-0"
      } transition-transform duration-300 ease-in-out rounded-lg shadow-2xl p-6
      ${
        isDarkMode ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-white"
      } bg-opacity-90`}
    >
      <button
        onClick={closeSidebar}
        className="absolute top-5 right-5 text-2xl"
        style={{ color: isDarkMode ? "#2B2D42" : "#F7F7F9" }} // Close button color based on theme
      >
        ×
      </button>

      <div className="flex flex-col items-start space-y-8">
        {["About", "Skills", "Projects", "Contact"].map((link) => (
          <button
            key={link}
            onClick={() => handleScroll(link.toLowerCase())}
            className={`text-xl font-semibold transition duration-300 ${
              isDarkMode ? "hover:text-[#2B2D42]" : "hover:text-[#F7E733]"
            }`}
          >
            {link}
          </button>
        ))}

        <div className="flex space-x-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/rumanali.wasli",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/rumanwasli/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/iru34n",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/ruman-ali-517343326/?trk=opento_sprofile_goalscard",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition duration-300 ${
                isDarkMode ? "hover:text-[#2B2D42]" : "hover:text-[#F7E733]"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
