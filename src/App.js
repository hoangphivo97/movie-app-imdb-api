import "./styles.css";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=star-wars&apikey=dfb5873a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
