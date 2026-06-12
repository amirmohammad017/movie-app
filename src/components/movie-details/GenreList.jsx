import React from "react";

const GenreList = ({ genre }) => {
  if (!genre || genre === "N/A") return null;

  const genres = genre.split(", ");

  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((g, index) => (
        <span
          key={index}
          className="px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-full 
          border border-blue-600/20 text-sm font-medium"
        >
          {g}
        </span>
      ))}
    </div>
  );
};

export default GenreList;
