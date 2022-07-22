import useMovieInfo from '../../hooks/useMovieInfo';
import { Movie } from '../../models/movie';
import MoviePoster from '../movie-poster/MoviePoster';
import { Container, Duration, Genre, Release, ReleaseDurationContainer, Title } from './styles';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { genreName, duration, releaseYear } = useMovieInfo(movie);

  return (
    <Container>
      <MoviePoster movie={movie}>
        <Genre>{genreName}</Genre>
      </MoviePoster>
      <Title>{movie.originalTitle}</Title>
      <ReleaseDurationContainer>
        <Release>{releaseYear}</Release>
        <Duration>{duration}</Duration>
      </ReleaseDurationContainer>
    </Container>
  );
};

export default MovieCard;
