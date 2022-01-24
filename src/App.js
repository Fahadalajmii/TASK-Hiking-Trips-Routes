import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/triplist" element={<TripsList />} />
        <Route path="/triplist/:tripId" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
