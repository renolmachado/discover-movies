import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import Search from '../../components/search/Search';
import { useDiscoverMovies, useSearchMovies } from '../../hooks/services/useMovies';
import { onSearch } from '../../store/slices/searchSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { Layout } from './styles';

const Movies = () => {
  const dispatch = useAppDispatch();
  const { search } = useSelector((state: RootState) => state.search);
  const isDiscoverMoviesEnabled = !search;
  const discoveredMovies = useDiscoverMovies(isDiscoverMoviesEnabled);
  const searchedMovies = useSearchMovies(search);
  const areMoviesBySearch = !!search;
  const queryResult = areMoviesBySearch ? searchedMovies : discoveredMovies;
  const movies = queryResult.data?.results;
  const randomMoviePosition = useMemo(() => Math.floor(Math.random() * (movies?.length || 0)), [movies]);

  const onSearchHandler = (toSearch: string) => {
    dispatch(onSearch(toSearch));
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      {movies?.length && !queryResult.isLoading ? <MovieBanner movie={movies[randomMoviePosition]} /> : <MovieBannerPlaceholder />}
      <Layout>
        <MovieFilters></MovieFilters>
        <div style={{ width: 803, height: 2200 }}>
          <Search onSearch={onSearchHandler} />
        </div>
      </Layout>
    </div>
  );
};

export default Movies;
