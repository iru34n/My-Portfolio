import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./components/sub-components/ThemeProvider";

function LandingPage() {
  const { isDarkMode } = useTheme(); // Access theme mode

  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const aboutBoxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5, // Button animates after the About box
      },
    },
  };

  return (
    <div className="w-full min-h-screen pt-1 pb-20 overflow-hidden">
      <div className="textStructure mt-36 flex flex-col items-start lg:items-center justify-center px-4 lg:px-20">
        <h1 className="uppercase tracking-tighter font-playfair font-bold text-6xl sm:text-9xl">
          Ruman
        </h1>
        <h1 className="uppercase -mt-3.5 tracking-tighter font-playfair font-bold text-6xl sm:text-9xl">
          Ali Shahzad
        </h1>
      </div>

      <div className="occupation flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-2 md:gap-5 lg:gap-20 px-4 lg:px-64 mt-2">
        <h3 className="text-bold tracking-tighter text-2xl md:text-3xl lg:text-3xl lg:text-nowrap font-fraunces">
          Frontend Developer
        </h3>
        <h3 className="text-bold tracking-tighter text-2xl md:text-3xl lg:text-3xl lg:text-nowrap font-fraunces">
          UI Designer
        </h3>
      </div>

      <div className="imageContainer mt-8 flex flex-col sm:flex-col lg:flex-row items-center lg:items-start lg:justify-center space-y-6 lg:space-y-0 lg:space-x-8 px-4">
        {/* Image with Enhanced Shadow */}
        <img
          src="public\assets\Mienar.gif"
          alt=""
          className={`w-full sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-xl ${
            isDarkMode
              ? " shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
              : " shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          }`}
        />

        {/* Animated About Box */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={aboutBoxVariants}
          className="about w-full max-w-xs md:max-w-md lg:max-w-lg text-left px-4 md:px-6 lg:px-8"
        >
          <p
            className={`bg-[#41E2BA] px-4 py-2 text-[#303036] rounded-lg font-nunito font-extrabold text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed ${
              isDarkMode
                ? " shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
                : " shadow-[0_12px_24px_rgba(0,0,0,0.1)]"
            }`}
          >
            Hi, I'm a Frontend Developer. <br /> I specialize in transforming
            ideas into polished, professional, and visually captivating
            websites. <br /> I create digital experiences that seamlessly blend
            functionality with aesthetics.
          </p>

          {/* Animated Learn More Button */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            onClick={scrollToAbout} // Attach scroll function here
            className={`px-5 uppercase py-3 mt-6 flex items-center gap-3 font-fraunces bg-[#41E2BA] text-[#303036] rounded-full ${
              isDarkMode
                ? " shadow-[0_4px_12px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(255,255,255,0.25)]"
                : " shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
            }`}
          >
            Learn More
            <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
