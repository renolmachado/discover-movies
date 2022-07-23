import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { onNext, onSearch, onPrevious } from '../../store/slices/filterSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useDiscoverMovies, useSearchMovies } from '../../hooks/services/useMovies';
import { Movie } from '../../models/movie';
import useSearch from '../../hooks/useSearch';

interface UseMovies {
  randomMovie?: Movie;
  moviesResult: MoviesResult;
  filtersHandlers: FilterHandlers;
}

interface MoviesResult {
  isLoading: boolean;
  movies?: Movie[];
  page: number;
  totalPages: number;
}

interface FilterHandlers {
  onSearchHandler: (search: string) => void;
  onNextHandler: () => void;
  onPreviousHandler: () => void;
}

const useMovies = (): UseMovies => {
  const dispatch = useAppDispatch();
  const { page } = useSelector((state: RootState) => state.filter);
  const { search, isSearching } = useSearch();
  const isDiscoverMoviesEnabled = !isSearching;
  const discoveredMovies = useDiscoverMovies(isDiscoverMoviesEnabled, page);
  const searchedMovies = useSearchMovies(search, page);
  const queryResult = isDiscoverMoviesEnabled ? discoveredMovies : searchedMovies;
  const movies = queryResult.data?.results;

  const randomMovie = useMemo(() => {
    const randomMoviePosition = Math.floor(Math.random() * (movies?.length || 0));
    return movies ? movies[randomMoviePosition] : undefined;
  }, [movies]);

  const onSearchHandler = (toSearch: string) => {
    dispatch(onSearch(toSearch));
  };

  const onNextHandler = () => {
    const totalPages = queryResult?.data?.totalPages ?? 0;
    if (page < totalPages) {
      dispatch(onNext());
    }
  };

  const onPreviousHandler = () => {
    dispatch(onPrevious());
  };

  return {
    randomMovie,
    moviesResult: {
      movies,
      isLoading: queryResult.isLoading,
      page,
      totalPages: queryResult.data?.totalPages || 0,
    },
    filtersHandlers: {
      onNextHandler,
      onSearchHandler,
      onPreviousHandler,
    },
  };
};

export default useMovies;
