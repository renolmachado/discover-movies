import MovieBanner from '../../components/movie-banner/MovieBanner';
import MovieBannerPlaceholder from '../../components/movie-banner/MovieBannerPlaceholder';
import MovieFilters from '../../components/movie-filters/MovieFilters';
import { useDiscoverMovies } from '../../hooks/services/useMovies';
import { Layout } from './styles';

const Movies = () => {
  const { data, isLoading } = useDiscoverMovies();
  const { results: movies } = data || { movies: [] };
  const randomMoviePosition = Math.floor(Math.random() * (movies?.length || 0));

  return (
    <div style={{ backgroundColor: 'black' }}>
      {movies?.length && !isLoading ? <MovieBanner movie={movies[randomMoviePosition]} /> : <MovieBannerPlaceholder />}
      <Layout>
        <MovieFilters></MovieFilters>
        {/* <div style={{ width: 803, height: 2200, backgroundColor: 'blue' }}></div> */}
      </Layout>
    </div>
  );
};

export default Movies;
