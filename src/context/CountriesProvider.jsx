import { createContext, useContext, useState, useEffect } from "react";

import fallbackData from "../data/data.json";

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  function normalizeCountry(country) {
    return {
      cca3: country.cca3 || country.alpha3Code,
      name: country.name?.common || country.name,
      nativeName: country.name?.nativeName
        ? Object.values(country.name.nativeName)[0]?.common
        : country.nativeName || "Unknown",
      population: country.population || 0,
      region: country.region || "Unknown",
      subregion: country.subregion || "Unknown",
      flag: country.flags?.svg || country.flag,
      capital: Array.isArray(country.capital)
        ? country.capital : country.capital
        ? [country.capital] : ["Unknown"],
      tld: Array.isArray(country.tld)
        ? country.tld : country.tld
        ? [country.tld] : country.topLevelDomain || ["Unknown"],
      currencies: country.currencies
        ? Array.isArray(country.currencies)
          ? country.currencies.map(c => c.code || c.name)
          : Object.values(country.currencies).map(c => c.name)
        : ["Unknown"],

      languages: country.languages
        ? Array.isArray(country.languages)
          ? country.languages.map(l => l.name)
          : Object.values(country.languages)
        : ["Unknown"],
      borders: country.borders || []
    };
  }

  useEffect(() => {
    async function fetchCountries() {
        setCountries(fallbackData.map(normalizeCountry));
    }

    fetchCountries();
  }, [])

  async function getCountryByCode(code) {
      return normalizeCountry(fallbackData.find(item => item.alpha3Code === code));
  }
  
  return (
    <CountriesContext.Provider value={{ countries, getCountryByCode }}>
      {children}
    </CountriesContext.Provider>
  )
}

export function useCountries() {
  return useContext(CountriesContext);
}