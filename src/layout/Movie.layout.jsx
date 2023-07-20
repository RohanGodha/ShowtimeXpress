import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <MovieNavbar />
      <Component {...props} />
      <footer> Movie Layot End</footer>
    </div>
  );
};

export default MovieLayoutHoc;
