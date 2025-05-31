import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [heroCount, setHeroCount] = useState(0);

  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/hero"
          element={
            <>
              <Background heroCount={heroCount} />
              <Navbar />
              <Hero
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
