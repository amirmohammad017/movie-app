import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMovieContext } from "../context/MovieContext";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid";

const HomePage = () => {
  // context
  const {
    movies,
    setMovies,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalResults,
    setTotalResults,
  } = useMovieContext();

  const [loading, setLoading] = useState(false);
  const API_KEY = "7790cebf";

  // fetch data

  const fetchMovies = async (pageNumber, searchText) => {
    const targetQuery = searchText || searchTerm;
    if (!targetQuery.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(targetQuery)}*&page=${pageNumber}&apikey=${API_KEY}`,
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // prevent reFetch data
  useEffect(() => {
    // only fetch if there was no movie in context
    if (movies.length === 0 && searchTerm.trim() !== "") {
      fetchMovies(currentPage);
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies(1);
  };

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(newPage);
    fetchMovies(newPage);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearchSubmit}
        loading={loading}
      />

      <MovieGrid movies={movies} loading={loading} />

      {totalResults > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          loading={loading}
        />
      )}
    </main>
  );
};

export default HomePage;
