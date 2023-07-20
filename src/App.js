import React from "react";
import "./App.css";

//Routing
import { Routes, Route } from "react-router-dom";
//React Slick Carousal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./pages/Home.page.jsx"; // Corrected the import path
import MoviePage from "./pages/Movie.page.jsx";
import Play from "./pages/Play.page.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/plays" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
