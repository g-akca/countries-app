import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import CountryList from "./components/CountryList";

import CountryDetails from "./components/CountryDetails";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="text-base leading-base text-grey-950 dark:text-white bg-grey-50 dark:bg-blue-950 min-h-screen transition-all duration-300">
      <Header />

      <Routes>
        <Route 
          path="/"
          element={
            <main className="px-4 py-6 flex flex-col gap-8 tablet:px-10 tablet:py-12 tablet:gap-12 desktop:px-20">
              <SearchAndFilter search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
              <CountryList search={search} region={region} />
            </main>
          }
        />

        <Route 
          path="/country/:name"
          element={
            <main className="px-7 py-10 flex justify-center desktop:p-20">
              <CountryDetails />
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
