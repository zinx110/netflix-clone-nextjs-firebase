import styles from "./Row.module.css";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, movies, isLargeRow }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL().search);
          setTrailerUrl(urlParams.get("v"));

          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.row_posters}>
        {movies.map((movie) => (
          <img
            className={`
            ${styles.row_poster} 
            ${isLargeRow && styles.row_posterLarge}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* https://www.youtube.com/watch?v=dtQujtZ_hPM */}
      {/* <YouTube videoId={"dtQujtZ_hPM"} opts={opts} /> */}
    </div>
  );
};

export default Row;
