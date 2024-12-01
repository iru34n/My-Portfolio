import React from "react";
import { useTheme } from "./components/sub-components/ThemeProvider";

const Footer = () => {
  const { isDarkMode } = useTheme(); // Access theme mode

  return (
    <div
      id="contact"
      className="relative w-full mt-16 h-full flex gap-5 font-fraunces overflow-hidden p-20"
    >
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[7vw] uppercase leading-none -m-10 font-semibold tracking-tighter">
            You've
          </h1>
          <h1 className="text-[7vw] uppercase leading-none -m-10 mt-10 font-semibold tracking-tighter">
            Reached
          </h1>
        </div>
        <div className="absolute bottom-10">
          <div>
            <img
              src={
                isDarkMode ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"
              }
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="heading">
          <h1 className="text-[7vw] uppercase leading-none -m-10 font-semibold tracking-tighter">
            The End
          </h1>
          <div className="detailLinks relative right-10 flex flex-col font-[Bahnschrift] mt-44 text-xl">
            <p className="mb-6">Socials:</p>
            {[
              {
                name: "Facebook",
                link: "https://www.facebook.com/rumanali.wasli",
              },
              {
                name: "Instagram",
                link: "https://www.instagram.com/rumanwasli/",
              },
              { name: "Github", link: "https://github.com/iru34n" },
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/ruman-ali-517343326/?trk=opento_sprofile_goalscard",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md capitalize font-light hover:underline"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="detailLinks relative right-10 flex flex-col font-[Bahnschrift] mt-20 text-xl">
            <p className="mb-6">Email:</p>
            <a
              href="mailto:rumanaliw@gmail.com"
              className="text-md font-light hover:underline"
            >
              rumanaliw@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
