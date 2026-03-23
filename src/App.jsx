import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="text-base leading-base text-grey-950 bg-grey-50 min-h-screen">
      <Header />

      <main className="px-4 py-6 flex flex-col gap-8">
        <SearchAndFilter />
        <CountryList />
      </main>
    </div>
  )
}

export default App
