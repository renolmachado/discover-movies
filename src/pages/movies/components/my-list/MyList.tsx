import useMyList from '../../../../hooks/useMyList';
import MoviesCardList from '../movies-card-list/MoviesCardList';

const MyList = () => {
  const { movies } = useMyList();

  return movies.length ? <MoviesCardList movies={movies} title="My List" /> : null;
};

export default MyList;
