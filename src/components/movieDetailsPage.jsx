import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BackButton from "./movie-details/TempButton";
import MoviePoster from "./movie-details/MoviePoster";
import MovieHeader from "./movie-details/MovieHeader";
import GenreList from "./movie-details/GenreList";
import PlotSection from "./movie-details/PlotSection";
import RatingsGrid from "./movie-details/RatingsGrid";
import MovieMeta from "./movie-details/MovieMeta";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=7790cebf`,
        );

        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
          setError("");
        }
      } catch (err) {
        setError("Failed to fetch movie data");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  if (loading)
    return (
      <div className="text-white p-10 text-center text-lg">
        Loading movie...
      </div>
    );

  if (error)
    return <div className="text-red-400 p-10 text-center text-lg">{error}</div>;

  if (!movie)
    return (
      <div className="text-white p-10 text-center">No Movie Data Found</div>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <BackButton />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <MoviePoster poster={movie.Poster} title={movie.Title} />

          <div className="md:col-span-8 flex flex-col gap-8">
            <MovieHeader
              title={movie.Title}
              rating={movie.imdbRating}
              year={movie.Year}
              runtime={movie.Runtime}
              rated={movie.Rated}
            />

            <GenreList genre={movie.Genre} />

            <PlotSection plot={movie.Plot} />

            <RatingsGrid ratings={movie.Ratings} />

            <MovieMeta
              director={movie.Director}
              actors={movie.Actors}
              boxOffice={movie.BoxOffice}
              awards={movie.Awards}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
