// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GiftCards from "./pages/GiftCards";
import Navbar from "./components/Navbar2";

function App() {
  return (
    <div className="App font-poppins overflow-hidden">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="/giftCards"  element={<GiftCards />} />
      </Routes>
    </div>
  );
}

export default App;
