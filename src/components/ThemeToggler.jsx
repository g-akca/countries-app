import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import { useTheme } from "../context/ThemeProvider";

function ThemeToggler() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(prev => !prev)}
      className="
        group flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer
        transition-all duration-300 text-gray-800 dark:text-white
        hover:-translate-y-0.5 hover:scale-[1.03]
      hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97]
        shadow-sm hover:shadow-md
      "
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-[16px] desktop:text-[20px] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"/>

      <span className="text-[12px] font-semibold desktop:text-[16px]">{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  )
}

export default ThemeToggler;