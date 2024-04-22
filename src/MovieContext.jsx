/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

const MovieType = createContext();

function MovieContext({ children }) {
  const [movieId, setMovieId] = useState("");
  return (
    <MovieType.Provider value={{ movieId, setMovieId }}>
      {children}
    </MovieType.Provider>
  );
}

export { MovieContext, MovieType };
