import { useTheme } from 'styled-components';
import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import MoviesCardList from './components/movies-card-list/MoviesCardList';
import MyList from './components/my-list/MyList';
import Pagination from '../../components/pagination/Pagination';
import Search from '../../components/search/Search';
import { ITheme } from '../../interfaces/theme';
import { Layout, MoviesContainer, MoviesPage } from './styles';
import useMovies from './useMovies';

const Movies = () => {
  const { moviesResult, randomMovie, filtersHandlers } = useMovies();
  const { onNextHandler, onPreviousHandler, onSearchHandler } = filtersHandlers;
  const { movies, isLoading, page, totalPages } = moviesResult;
  const theme = useTheme() as ITheme;

  return (
    <MoviesPage>
      {movies?.length && !isLoading ? <MovieBanner movie={randomMovie} /> : <MovieBannerPlaceholder />}
      <Layout>
        {theme.isMobile && <Search onSearch={onSearchHandler} />}
        <MovieFilters></MovieFilters>
        <MoviesContainer>
          {!theme.isMobile && <Search onSearch={onSearchHandler} />}
          <MyList />
          <MoviesCardList movies={movies} title={theme.isMobile ? 'Movies' : 'Discover'} />
          <Pagination page={page} totalPages={totalPages} onNext={onNextHandler} onPrevious={onPreviousHandler} />
        </MoviesContainer>
      </Layout>
    </MoviesPage>
  );
};

export default Movies;
