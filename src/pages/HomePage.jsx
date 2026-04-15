import SearchAndFilter from "../features/home/SearchAndFilter";
import CountryList from "../features/home/CountryList";

import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  const [regions, setRegions] = useState("");

  return (
    <main className="px-4 py-6 flex flex-col gap-8 tablet:px-10 tablet:py-12 tablet:gap-12 desktop:px-20">
      <SearchAndFilter search={search} setSearch={setSearch} regions={regions} setRegions={setRegions} />

      <CountryList search={search} regions={regions} />
    </main>
  )
}

export default HomePage;