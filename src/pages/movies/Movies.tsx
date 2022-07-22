import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieCard from '../../components/movie-card/MovieCard';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import Search from '../../components/search/Search';
import Title from '../../components/title/Title';
import { useDiscoverMovies, useSearchMovies } from '../../hooks/services/useMovies';
import { onSearch } from '../../store/slices/searchSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { Layout, MovieList, MoviesContainer, TitleWrapper } from './styles';

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
        <MoviesContainer>
          <Search onSearch={onSearchHandler} />
          {movies?.length && (
            <>
              <TitleWrapper>
                <Title title="Discover" />
              </TitleWrapper>
              <MovieList>
                {movies?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </MovieList>
            </>
          )}
        </MoviesContainer>
      </Layout>
    </div>
  );
};

export default Movies;
