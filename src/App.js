import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Storage } from "./pages/Storage";
import { CarStorage } from "./pages/CarStorage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/car-storage" element={<CarStorage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
