import { useNavigate } from 'react-router-dom';
import MoviePoster from '../../../../components/movie-poster/MoviePoster';
import useMovieInfo from '../../../../hooks/useMovieInfo';
import { Movie } from '../../../../models/movie';
import { Container, Duration, PosterWrapper, Release, ReleaseDurationContainer, Title } from './styles';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { duration, releaseYear } = useMovieInfo(movie);
  const navigate = useNavigate();

  const goToMovieDetails = () => {
    navigate('../' + movie.id);
  };

  return (
    <Container onClick={goToMovieDetails}>
      <PosterWrapper>
        <MoviePoster movie={movie} />
      </PosterWrapper>
      <Title>{movie.originalTitle}</Title>
      <ReleaseDurationContainer>
        <Release>{releaseYear}</Release>
        <Duration>{duration}</Duration>
      </ReleaseDurationContainer>
    </Container>
  );
};

export default MovieCard;
