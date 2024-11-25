// File: Skills.js
import React from "react";
import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaFigma, FaCss3Alt } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import the hook
import { useTheme } from "./components/sub-components/ThemeProvider"; // Import the useTheme hook

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  const { isDarkMode } = useTheme(); // Access theme to determine if it's dark mode

  const skillsData = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      description:
        "Adds interactivity and dynamic functionality to my websites, from form validation to animations and API integrations.",
    },
    {
      name: "React",
      icon: <FaReact />,
      description:
        "Enables me to build reusable components and scalable, high-performance web applications tailored to client needs.",
    },
    {
      name: "Tailwind",
      icon: <FaCss3Alt />,
      description:
        "Simplifies creating responsive, visually appealing layouts with its utility-first approach, ensuring efficient and clean designs",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      description:
        "Helps me design and prototype interfaces, turning client ideas into functional, visually polished websites",
    },
  ];

  return (
    <div
      id="skills"
      className={`w-full min-h-screen pt-20 ${
        isDarkMode
          ? "bg-[#2B2D42] text-[#F7F7F9]"
          : "bg-[#F7F7F9] text-[#212121]"
      }`}
      ref={ref}
    >
      <div className="px-20 text-center">
        <div className="text-3xl flex justify-center sm:text-4xl lg:text-5xl font-fraunces mb-12">
          The Tech Stack Arsenal
        </div>

        {/* Skill Heading and Icon */}
        <div className="flex justify-center mt-10 gap-16 sm:flex-col sm:gap-8 md:flex-row md:gap-12 lg:flex-row">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: inView ? "auto" : 0 }} // Animate on scroll into view
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.15 }}
                className="relative flex items-center justify-center w-max h-12 mx-4"
              >
                {/* The Box Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className="absolute top-0 left-0 w-0 h-full bg-[#F7E733] rounded-lg"
                ></motion.div>

                {/* Skill Heading */}
                <motion.h2
                  className="text-3xl font-nunito font-bold flex items-center sm:text-xl lg:text-3xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
                  transition={{ delay: index * 0.4, duration: 0.6 }}
                >
                  {skill.icon}
                  <span className="ml-3 sm:mt-2 lg:ml-3">{skill.name}</span>
                </motion.h2>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center mt-10 px-20">
        {/* Card Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`card relative flex items-center justify-center rounded-xl w-80 h-48 sm:w-full sm:h-48 md:w-80 md:h-48 lg:w-96 lg:h-52 ${
                isDarkMode ? "bg-[#DDF8E8]" : "bg-[#2B2D42]"
              } hover:scale-105 transition-transform duration-300 ease-in-out group ${
                isDarkMode ? "shadow-light" : "shadow-dark"
              }`}
            >
              <div className="flex flex-col items-center justify-center card-icon-container opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                {React.cloneElement(skill.icon, {
                  className: `text-5xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 ${
                    isDarkMode ? "text-[#2B2D42]" : "text-[#F7F7F9]"
                  }`,
                })}
                <p
                  className={`text-center font-nunito font-extrabold text-lg sm:text-base md:text-lg lg:text-xl ${
                    isDarkMode ? "text-[#2B2D42]" : "text-[#F7F7F9]"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
              <div className="card-info absolute inset-0 flex items-center font-mono justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p
                  className={`text-lg text-center ${
                    isDarkMode ? "text-[#2B2D42]" : "text-[#F7F7F9]"
                  } whitespace-normal`}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
