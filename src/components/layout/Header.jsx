import ThemeToggler from "../ui/ThemeToggler";

import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white dark:bg-blue-900 h-20 px-4 flex justify-between items-center shadow-[0_2px_6px_rgba(0,0,0,0.06)] tablet:px-10 desktop:px-20 transition-all duration-300">
      <NavLink
        to="/"
        className="
          font-extrabold leading-5 desktop:text-[24px] desktop:leading-[137.5%] 
          transition-all duration-300 text-gray-900 dark:text-white
          hover:text-blue-600 dark:hover:text-blue-300
          hover:-translate-y-1 hover:scale-[1.03]
          hover:drop-shadow-[0_4px_8px_rgba(37,99,235,0.3)]
          dark:hover:drop-shadow-[0_4px_10px_rgba(147,197,253,0.4)]
        "
      >
        Where in the world?
      </NavLink>

      <ThemeToggler />
    </header>
  )
}

export default Header;