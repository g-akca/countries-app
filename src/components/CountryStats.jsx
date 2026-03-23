import CountryButton from "./CountryButton";

import data from "../data/data.json";

function CountryStats({ countryData }) {
  const borderCountries = countryData.borders ? countryData.borders.map(code => data.find(c => c.alpha3Code === code).name) : null;

  return (
    <section className="flex flex-col gap-8 tablet:gap-6 desktop:gap-16">
      <div className="flex flex-col gap-8 leading-8 font-light tablet:flex-row tablet:justify-between tablet:text-[16px]">
        <ul className="tablet:max-w-[50%]">
          <li><span className="font-semibold">Native Name:</span> {countryData.nativeName}</li>
          <li><span className="font-semibold">Population:</span> {countryData.population}</li>
          <li><span className="font-semibold">Region:</span> {countryData.region}</li>
          <li><span className="font-semibold">Sub Region:</span> {countryData.subregion}</li>
          <li><span className="font-semibold">Capital:</span> {countryData.capital}</li>
        </ul>

        <ul className="tablet:max-w-[50%]">
          <li><span className="font-semibold">Top Level Domain:</span> {countryData.topLevelDomain}</li>
          <li><span className="font-semibold">Currencies:</span> {countryData.currencies.map(cur => cur.code).join(", ")}</li>
          <li><span className="font-semibold">Languages:</span> {countryData.languages.map(lang => lang.name).join(", ")}</li>
        </ul>
      </div>

      {borderCountries && (
        <div className="flex flex-col gap-4 tablet:flex-row">
          <p className="text-[16px] leading-6 font-semibold tablet:shrink-0">Border Countries:</p>

          <div className="grow grid grid-cols-[repeat(auto-fit,96px)] gap-2 tablet:gap-4">
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