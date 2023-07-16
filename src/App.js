import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { CountryDetails } from "./Pages/CountryDetails";
import { Country } from "./Pages/Country";
import { ContinentsDetails } from "./Pages/ContinentDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsDetails />} />

        <Route path="/Country/:continentId" element={<Country />} />
        <Route path="/CountryDetails" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
