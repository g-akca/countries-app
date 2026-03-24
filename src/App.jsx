import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-base leading-base text-grey-950 dark:text-white bg-grey-50 dark:bg-blue-950 min-h-screen transition-all duration-300">
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />

        <Route path="/country/:cca3" element={ <CountryPage /> } />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  )
}

export default App
