import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header className="bg-white h-20 px-4 flex justify-between items-center shadow-[0_2px_6px_rgba(0,0,0,0.06)] tablet:px-10">
      <p className="font-extrabold leading-5">Where in the world?</p>

      <ThemeToggler />
    </header>
  )
}

export default Header;