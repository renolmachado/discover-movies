import { useDiscoverMovies } from '../../hooks/movies';

const Movies = () => {
  const { data } = useDiscoverMovies();
  const { results: movies } = data || {};

  return (
    <div>
      {movies?.map((movie) => (
        <div key={movie.originalTitle}>{movie.originalTitle}</div>
      ))}
    </div>
  );
};

export default Movies;
