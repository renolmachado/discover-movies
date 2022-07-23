import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../models/movie';
import { addMovie } from '../store/slices/myListSlice';
import { RootState } from '../store/store';
import useSearch from './useSearch';

interface UseMyList {
  movies: Movie[];
  addMovieToMyList: (movie: Movie) => () => void;
  isAlreadyAddedIntoMyList: (movie: Movie) => boolean;
}

const useMyList = (): UseMyList => {
  const { moviesMap } = useSelector((state: RootState) => state.myList);
  const { search } = useSearch();
  const movies = useMemo(
    () =>
      Object.values(moviesMap).filter((movie) => {
        const title = movie.originalTitle.toLowerCase();
        const toSearch = search.toLowerCase();
        return title.includes(toSearch);
      }),
    [moviesMap, search]
  );
  const dispatch = useDispatch();
  const addMovieToMyList = (movie: Movie) => {
    return () => dispatch(addMovie(movie));
  };

  const isAlreadyAddedIntoMyList = (movie: Movie) => {
    return !!moviesMap[movie.id];
  };

  return {
    movies,
    addMovieToMyList,
    isAlreadyAddedIntoMyList,
  };
};

export default useMyList;
