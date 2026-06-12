import React, { createContext, useState, useContext } from "react";

const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  // these are the states we need in order to keep data in HomePage
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalResults,
        setTotalResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
