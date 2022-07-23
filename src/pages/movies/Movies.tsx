import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import MoviesList from '../../components/movies-list/MoviesList';
import Pagination from '../../components/pagination/Pagination';
import Search from '../../components/search/Search';
import { Layout, MoviesContainer } from './styles';
import useMovies from './useMovies';

const Movies = () => {
  const { moviesResult, randomMovie, filtersHandlers } = useMovies();
  const { onNextHandler, onPreviousHandler, onSearchHandler } = filtersHandlers;
  const { movies, isLoading, page, totalPages } = moviesResult;

  return (
    <div style={{ backgroundColor: '#080808' }}>
      {movies?.length && !isLoading ? <MovieBanner movie={randomMovie} /> : <MovieBannerPlaceholder />}
      <Layout>
        <MovieFilters></MovieFilters>
        <MoviesContainer>
          <Search onSearch={onSearchHandler} />
          <MoviesList movies={movies} title="Discover" />
          <Pagination page={page} totalPages={totalPages} onNext={onNextHandler} onPrevious={onPreviousHandler} />
        </MoviesContainer>
      </Layout>
    </div>
  );
};

export default Movies;
