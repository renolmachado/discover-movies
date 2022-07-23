import useMyList from '../../hooks/useMyList';
import MoviesList from '../movies-list/MoviesList';

const MyList = () => {
  const { movies } = useMyList();

  return movies.length ? <MoviesList movies={movies} title="My List" /> : null;
};

export default MyList;
