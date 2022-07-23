import { useNavigate, useParams } from 'react-router-dom';
import MovieBanner from '../../components/movie-banner/MovieBanner';
import { useGetMovieById } from '../../hooks/services/useMovies';
import BestRatedMovies from './components/best-rated-movies/BestRatedMovies';
import RelatedMovies from './components/related-titles/RelatedMovies';
import { Container, HomeButton, MoviePage, Status } from './styles';

const Movie = () => {
  const { id } = useParams();
  const { data: movie, isError, isLoading } = useGetMovieById(Number(id));
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <MoviePage>
        <Status>Loading...</Status>;
      </MoviePage>
    );
  }

  return (
    <MoviePage>
      {isError ? (
        <Status>
          Movie not found
          <HomeButton onClick={() => navigate('movies')}>Home</HomeButton>
        </Status>
      ) : (
        <>
          <MovieBanner isPosterVisible isOverviewVisible movie={movie} />
          <Container>
            <RelatedMovies movieId={movie.id} />
            <BestRatedMovies />
          </Container>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;
