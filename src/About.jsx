import React from "react";
import Skills from "../src/assets/Skills.svg";

function About() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="relative w-full p-6 sm:p-10 md:p-20 bg-[#F7E733] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-tl-3xl rounded-tr-3xl text-[#303036]"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fraunces text-[#2B2D42]">
        About Me:
      </h1>
      <h1 className="font-nunito font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-10 leading-relaxed sm:leading-loose lg:leading-snug tracking-tight">
        I'm a web developer who loves turning ideas into sleek, functional
        websites. With a keen eye for design and a knack for solving problems,{" "}
        <br /> I craft websites that not only work but also shine. Let's build
        something awesome together!
      </h1>
      <div className="w-full flex flex-col sm:flex-row gap-5 border-t pt-10 mt-20 border-[#2B2D42]">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-fraunces text-[#2B2D42]">
            My Skills:
          </h1>
          <h1 className="font-nunito font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-10 tracking-tight">
            Curious about the tools I use to bring ideas to life? <br /> Dive
            into my Skills section below to see the tech stack that powers the
            websites I create. Check them out and let's see how I can help make
            your project stand out!
          </h1>
          <button
            onClick={scrollToSkills}
            className="px-4 sm:px-5 font-fraunces uppercase py-3 mt-6 sm:mt-10 flex items-center gap-3 bg-[#2B2D42] text-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.5)]"
          >
            Learn More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[50vh] sm:h-[70vh] overflow-hidden rounded-3xl">
          <img
            className="w-full h-full"
            src={Skills}
            alt="Professional environment"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
