import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movielist.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=267ffb26`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="container-fluid movie-poster">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <SiteHeader heading="Movie LOL" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
