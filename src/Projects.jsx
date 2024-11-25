import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Projects() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div
      id="projects"
      className="w-full pt-20 mt-16 pb-28 bg-[#00A7E1] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-tl-3xl rounded-tr-3xl text-[#303036]"
    >
      <div className="w-full px-20 pb-8">
        <h1 className="text-6xl font-fraunces tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-14 mt-20">
        <div className="cards w-full flex gap-6 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-[60%] h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#F7E733] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-fraunces">
              {"CALC-APP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="public/assets/Calc Webapp.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-[60%] h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#F7E733] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-fraunces">
              {"OCHI-Clone".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <video
                className="w-full h-full bg-cover object-cover"
                controls
                muted
                loop
              >
                <source src="public\assets\1123.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
