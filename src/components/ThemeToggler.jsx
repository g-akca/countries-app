import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function ThemeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button type="button" onClick={() => setDarkMode(prev => !prev)} className="flex items-center gap-1.5 cursor-pointer">
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-[16px] text-grey-950 dark:text-white desktop:text-[20px]" />
      <p className="text-[12px] font-semibold leading-[135%] desktop:text-[16px] desktop:leading-[200%]">{darkMode ? "Light Mode" : "Dark Mode"}</p>
    </button>
  )
}

export default ThemeToggler;