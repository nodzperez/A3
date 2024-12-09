import { useState } from "react";
import MovieList from "./components/movielist.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([
    {
      Title: "The Lego Movie",
      Year: "2014",
      imdbID: "tt1490017",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Movie 2: The Second Part",
      Year: "2019",
      imdbID: "tt3513498",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkyOTkwNDc1N15BMl5BanBnXkFtZTgwNzkyMzk3NjM@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Ninjago Movie",
      Year: "2017",
      imdbID: "tt3014284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWQ3Zjk0ZGEtOTU4ZS00OWY1LTlkM2YtNTllZjBhNTk3NDAxXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Lego Star Wars Holiday Special",
      Year: "2020",
      imdbID: "tt12885438",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzQ2NTRhZGItN2MxMC00N2UzLTk2YTMtYWI5NmU4OTVkNTc2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Lego Batman: The Movie - DC Super Heroes Unite",
      Year: "2013",
      imdbID: "tt2465238",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjRjOGU2NzUtMjAwOC00MDI3LThmNmUtNTVkZTQ0MDEyYTc1XkEyXkFqcGdeQXVyMTA5NzUzODM4._V1_SX300.jpg",
    },
    {
      Title: "Lego Masters",
      Year: "2020–",
      imdbID: "tt9615014",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEwYTYwMjEtZjMzYy00YWE1LTg4ODEtNzEwMjcwZjZmNGQyXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Lego Star Wars: The Complete Saga",
      Year: "2007",
      imdbID: "tt1149396",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWJiMWM2YTktZjhjOS00YmQyLTgyYzYtMDcwMDQ1NWRjYTI2XkEyXkFqcGdeQXVyNzcxMjQzMDU@._V1_SX300.jpg",
    },
    {
      Title: "Lego Star Wars Terrifying Tales",
      Year: "2021",
      imdbID: "tt15164924",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGRiYWEzZjctMTMzMi00M2VhLWEzZDItNDIyOTVkZjBkNTI0XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Lego Batman: The Videogame",
      Year: "2008",
      imdbID: "tt1149317",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjViNzNkNjAtMGZmZi00MDM2LTk1OGUtYjVlNzhjNjIxNDgwXkEyXkFqcGdeQXVyMTAyNzc0MDkz._V1_SX300.jpg",
    },
  ]);

  return (
    <>
      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default App;
