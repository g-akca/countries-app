import CountryButton from "./CountryButton";

import data from "../data/data.json";

function CountryStats({ countryData }) {
  const borderCountries = countryData.borders ? countryData.borders.map(code => data.find(c => c.alpha3Code === code).name) : null;

  return (
    <section className="flex flex-col gap-8">
      <ul className="leading-8 font-light">
        <li><span className="font-semibold">Native Name:</span> {countryData.nativeName}</li>
        <li><span className="font-semibold">Population:</span> {countryData.population}</li>
        <li><span className="font-semibold">Region:</span> {countryData.region}</li>
        <li><span className="font-semibold">Sub Region:</span> {countryData.subregion}</li>
        <li><span className="font-semibold">Capital:</span> {countryData.capital}</li>
      </ul>

      <ul className="leading-8 font-light">
        <li><span className="font-semibold">Top Level Domain:</span> {countryData.topLevelDomain}</li>
        <li><span className="font-semibold">Currencies:</span> {countryData.currencies.map(cur => cur.code).join(", ")}</li>
        <li><span className="font-semibold">Languages:</span> {countryData.languages.map(lang => lang.name).join(", ")}</li>
      </ul>

      {borderCountries && (
        <div className="flex flex-col gap-4">
          <p className="text-[16px] leading-6 font-semibold">Border Countries:</p>

          <div className="flex justify-between">
            {borderCountries.map(item => (
              <CountryButton 
                key={item}
                name={item}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default CountryStats;