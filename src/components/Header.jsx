import ThemeToggler from "./ThemeToggler";

import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white h-20 px-4 flex justify-between items-center shadow-[0_2px_6px_rgba(0,0,0,0.06)] tablet:px-10 desktop:px-20">
      <NavLink to="/" className="font-extrabold leading-5 desktop:text-[24px] desktop:leading-[137.5%]">
        Where in the world?
      </NavLink>

      <ThemeToggler />
    </header>
  )
}

export default Header;