import { useState, useEffect } from "react";

import CountryButton from "./CountryButton";

import { useCountries } from "../context/CountriesProvider";

function CountryStats({ countryData }) {
  const { getCountryByCode } = useCountries();
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function loadBorders() {
      if (!countryData.borders) {
        setBorderCountries([]);
        return;
      }

      const results = await Promise.all(countryData.borders.map(code => getCountryByCode(code)));

      setBorderCountries(results);
    }

    loadBorders();
  }, [countryData]);

  return (
    <section className="flex flex-col gap-8 tablet:gap-6 desktop:gap-16">
      <div className="flex flex-col gap-8 leading-8 font-light tablet:flex-row tablet:justify-between tablet:text-[16px]">
        <ul className="tablet:max-w-[50%]">
          <li><span className="font-semibold">Native Name:</span> {countryData.nativeName}</li>
          <li><span className="font-semibold">Population:</span> {countryData.population.toLocaleString()}</li>
          <li><span className="font-semibold">Region:</span> {countryData.region}</li>
          <li><span className="font-semibold">Sub Region:</span> {countryData.subregion}</li>
          <li><span className="font-semibold">Capital:</span> {countryData.capital.join(", ")}</li>
        </ul>

        <ul className="tablet:max-w-[50%]">
          <li><span className="font-semibold">Top Level Domain:</span> {countryData.tld}</li>
          <li><span className="font-semibold">Currencies:</span> {countryData.currencies.join(", ")}</li>
          <li><span className="font-semibold">Languages:</span> {countryData.languages.join(", ")}</li>
        </ul>
      </div>

      {borderCountries.length > 0 && (
        <div className="flex flex-col gap-4 tablet:flex-row">
          <p className="text-[16px] leading-6 font-semibold tablet:shrink-0">Border Countries:</p>

          <div className="grow grid grid-cols-[repeat(auto-fit,96px)] gap-2 tablet:gap-4">
            {borderCountries.map(item => (
              <CountryButton 
                key={item.cca3}
                name={item.name}
                cca3={item.cca3}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default CountryStats;