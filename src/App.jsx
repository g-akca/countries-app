import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import CountryList from "./components/CountryList";

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="text-base leading-base text-grey-950 bg-grey-50 min-h-screen">
      <Header />

      <main className="px-4 py-6 flex flex-col gap-8 tablet:px-10 tablet:py-12 tablet:gap-12 desktop:px-20">
        <SearchAndFilter search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        <CountryList search={search} region={region} />
      </main>
    </div>
  )
}

export default App
