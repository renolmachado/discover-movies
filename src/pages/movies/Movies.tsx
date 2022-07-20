import MovieBanner from '../../components/movie-banner/MovieBanner';
import { useDiscoverMovies } from '../../hooks/services/useMovies';

const Movies = () => {
  const { data } = useDiscoverMovies();
  const { results: movies } = data || { movies: [] };
  const randomMoviePosition = Math.floor(Math.random() * (movies?.length || 0));
  
  return (
    <>
      {movies?.length && <MovieBanner movie={movies[randomMoviePosition]} />}
      <div>
        {movies?.map((movie) => (
          <div key={movie.originalTitle}>{movie.originalTitle}</div>
        ))}
      </div>
    </>
  );
};

export default Movies;
