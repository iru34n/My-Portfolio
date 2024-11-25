import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      // Slider container: Adjust the width, height, and background color here
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isDarkMode ? "bg-[#F7F7F9]" : "bg-[#2B2D42]"
      } transition-colors duration-300`}
    >
      <div
        // Toggle button (icon container): Adjust size, background, and color here
        className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          isDarkMode
            ? "translate-x-6 bg-[#2B2D42] text-[#F7F7F9]"
            : "bg-[#F7F7F9] text-[#2B2D42]"
        }`}
      >
        {/* Icon (sun or moon): Icons change based on theme */}
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default ThemeToggle;
