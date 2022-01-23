import { useEffect, useState } from "react";
import "./App.css";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://i.guim.co.uk/img/media/aff9c61a560ec4dc99744b32fa3b9b56a0021f22/0_0_1215_1800/master/1215.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=c63736052f2ba00cd7ed52a16312aeb7'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg'
          }
        ]

      })
    }, 1000)

    return () => clearTimeout(timerId)
  })  


  return (
    <div className="container">
      <Button>Whatever Text</Button>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />

    </div>
  );
}

export default App;
