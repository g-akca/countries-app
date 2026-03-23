import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import { useTheme } from "../context/ThemeProvider";

function ThemeToggler() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button type="button" onClick={() => setDarkMode(prev => !prev)} className="flex items-center gap-1.5 cursor-pointer">
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-[16px] text-grey-950 dark:text-white desktop:text-[20px]" />
      <p className="text-[12px] font-semibold leading-[135%] desktop:text-[16px] desktop:leading-[200%]">{darkMode ? "Light Mode" : "Dark Mode"}</p>
    </button>
  )
}

export default ThemeToggler;