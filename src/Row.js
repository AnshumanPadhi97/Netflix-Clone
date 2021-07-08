import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((props.isLargeRow && movie.poster_path) ||
              (!props.isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${
                  props.NetflixOriginals && props.isLargeRow
                    ? "row_netflixOriginal"
                    : "row_poster"
                }`}
                key={movie.id}
                src={`${baseURL}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
