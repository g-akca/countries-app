function CountryCard({ flagUrl, name, population, region, capital }) {
  return (
    <div className="bg-white rounded-[5px] overflow-hidden shadow-[0_0_7px_rgba(0,0,0,0.1)]">
      <img src={flagUrl} className="w-full h-40 object-cover" />

      <div className="px-6 pt-6 pb-12 flex flex-col gap-4">
        <p className="text-[18px] font-extrabold leading-base">{name}</p>

        <ul className="font-light leading-4 flex flex-col gap-2">
          <li><span className="font-semibold">Population:</span> {population}</li>
          <li><span className="font-semibold">Region:</span> {region}</li>
          <li><span className="font-semibold">Capital:</span> {capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard;