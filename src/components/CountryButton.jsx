import { Link } from "react-router-dom";

function CountryButton({ name }) {
  return (
    <Link to={`/country/${name}`} className="min-h-7 w-24 bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] flex justify-center items-center text-center">
      {name}
    </Link>
  )
}

export default CountryButton;