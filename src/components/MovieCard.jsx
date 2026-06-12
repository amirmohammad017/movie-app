import { IoFilm } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2 shadow-xl"
    >
      {/* image */}
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400x600?text=No+Poster"
          }
          alt={`${movie.Title} Poster`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-white/10">
          {movie.Type}
        </div>
      </div>

      {/* info */}
      <div className="p-4">
        <h3 className="font-bold text-sm line-clamp-1 group-hover:text-blue-400 transition-colors">
          {movie.Title}
        </h3>

        <div className="flex justify-between items-center mt-2 text-gray-400 text-xs">
          <span>{movie.Year}</span>

          <span className="flex items-center gap-1">
            <IoFilm className="text-blue-500" />
            ID: {movie.imdbID.slice(0, 5)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
