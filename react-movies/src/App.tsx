import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { movieDTO } from "./movies/movies.model";

function App() {

  const testMovie: movieDTO = {
    id: 1,
    title: 'Spider-Man: Far From Home',
    poster: 'https://i.guim.co.uk/img/media/aff9c61a560ec4dc99744b32fa3b9b56a0021f22/0_0_1215_1800/master/1215.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=c63736052f2ba00cd7ed52a16312aeb7'
  }
  return (
    <>
      <IndividualMovie {...testMovie} />    
    </>
  );
} 

export default App;
