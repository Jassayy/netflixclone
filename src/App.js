import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
