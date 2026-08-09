import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recent from "./pages/Recent";
import "./index.css";
import Header from "./components/Header";
import About from "./pages/About";

function App() {
  return (
    

    <BrowserRouter>
      <Header />
      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/recent" element={<Recent />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;