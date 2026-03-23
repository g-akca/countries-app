import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import CountryList from "./components/CountryList";

function App() {
  return (
    <div className="text-base leading-base text-grey-950 bg-grey-50">
      <div>
        <Header />
        <SearchAndFilter />
      </div>

      <CountryList />
    </div>
  )
}

export default App
