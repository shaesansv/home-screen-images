import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Explore from "./components/Exlpore/Explore";
import Contact from "./components/Contact/Contact";
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
        <Route
          path="/"
          element={
            <>
              <Background heroCount={heroCount} />
              <Navbar />
              <Home
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
              />
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <Background heroCount={heroCount} />
              <Navbar />
              <Home
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
              />
            </>
          }
        />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
