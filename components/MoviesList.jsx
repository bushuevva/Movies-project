//будет формировать все карточки фильмов
import { Movie } from "./Movie";

//для получения пропсов
function MoviesList(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={Movie.id} {...movie} />)
      ) : (
        <h5>Nothing found</h5>
      )}
    </div>
  );
}
export { MoviesList };
