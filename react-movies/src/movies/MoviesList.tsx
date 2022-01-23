import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css'

function MoviesList(props: moviesListProps) {
    return ( <div className={css.div}>
        {props.movies.map(movie =>
            <IndividualMovie {...movie} key={movie.id}/>
            )}
    </div> );
}

interface moviesListProps{
    movies: movieDTO[]
}

export default MoviesList;