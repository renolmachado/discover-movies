import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import MoviesList from '../../components/movies-list/MoviesList';
import Pagination from '../../components/pagination/Pagination';
import Search from '../../components/search/Search';
import { useDiscoverMovies, useSearchMovies } from '../../hooks/services/useMovies';
import { onNext, onSearch, onPrevious } from '../../store/slices/filterSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { Layout, MoviesContainer } from './styles';

const Movies = () => {
  const dispatch = useAppDispatch();
  const { search, page } = useSelector((state: RootState) => state.filter);
  const isDiscoverMoviesEnabled = !search;
  const discoveredMovies = useDiscoverMovies(isDiscoverMoviesEnabled, page);
  const searchedMovies = useSearchMovies(search, page);
  const areMoviesBySearch = !!search;
  const queryResult = areMoviesBySearch ? searchedMovies : discoveredMovies;
  const movies = queryResult.data?.results;
  const randomMoviePosition = useMemo(() => Math.floor(Math.random() * (movies?.length || 0)), [movies]);

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

  return (
    <div style={{ backgroundColor: '#080808' }}>
      {movies?.length && !queryResult.isLoading ? <MovieBanner movie={movies[randomMoviePosition]} /> : <MovieBannerPlaceholder />}
      <Layout>
        <MovieFilters></MovieFilters>
        <MoviesContainer>
          <Search onSearch={onSearchHandler} />
          <MoviesList movies={movies} title="Discover" />
          <Pagination page={queryResult.data?.page} totalPages={queryResult.data?.totalPages} onNext={onNextHandler} onPrevious={onPreviousHandler} />
        </MoviesContainer>
      </Layout>
    </div>
  );
};

export default Movies;
