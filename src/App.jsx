import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import TopCategory from "./Pages/TopCategory";
import ProcessCard from "./Pages/ProcessCard";
import FeaturedJob from "./Pages/FeaturedJob";
import CompaniesCards from "./Pages/CompaniesCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Home/>
    <TopCategory/>
    <ProcessCard/>
    <FeaturedJob/>
    <CompaniesCards/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<TopCategory/>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;