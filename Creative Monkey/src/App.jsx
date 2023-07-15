import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Aan from "./components/About/About";
function App() {
  return (
    <>
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/about" element={<Aan />} />
      </Routes>
    </>
  );
}

export default App;
