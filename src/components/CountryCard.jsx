import { Link } from "react-router-dom";

function CountryCard({ flagUrl, name, population, region, capital }) {
  return (
    <Link to={`/country/${name}`}>
      <div className="h-full bg-white dark:bg-blue-900 rounded-[5px] overflow-hidden shadow-[0_0_7px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100 dark:hover:bg-white/10 active:scale-[0.97]">
        <img src={flagUrl} alt={`${name} flag`} className="w-full h-40 object-cover" />

        <div className="px-6 pt-6 pb-12 flex flex-col gap-4">
          <p className="text-[18px] font-extrabold leading-base">{name}</p>

          <ul className="font-light leading-4 flex flex-col gap-2">
            <li><span className="font-semibold">Population:</span> {population.toLocaleString()}</li>
            <li><span className="font-semibold">Region:</span> {region}</li>
            <li><span className="font-semibold">Capital:</span> {capital}</li>
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard;