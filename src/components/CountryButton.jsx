import { Link } from "react-router-dom";

function CountryButton({ name, cca3 }) {
  return (
    <Link to={`/country/${cca3}`} className="min-h-7 w-24 p-2 rounded-xs bg-white dark:bg-blue-900 shadow-[0_0_4px_rgba(0,0,0,0.1)] flex justify-center items-center text-center transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97]">
      {name}
    </Link>
  )
}

export default CountryButton;