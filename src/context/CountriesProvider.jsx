import { createContext, useContext, useState, useEffect } from "react";

import fallbackData from "../data/data.json";

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,alpha3Code");

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        setCountries(data);
      }
      catch (error) {
        console.error("Using fallback data:", error);
        setCountries(fallbackData);
      }
    }

    fetchCountries();
  })
  
  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  )
}

export function useCountries() {
  return useContext(CountriesContext);
}