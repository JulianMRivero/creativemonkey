import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route extact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
