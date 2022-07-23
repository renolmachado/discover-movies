import useMovieInfo from '../../hooks/useMovieInfo';
import { Movie } from '../../models/movie';
import MoviePoster from '../movie-poster/MoviePoster';
import Actions from './Actions';
import Stars from './Stars';
import { Container, Duration, ExpandableContainer, Genre, Release, ReleaseDurationContainer, Title } from './styles';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { genreName, duration, releaseYear, stars } = useMovieInfo(movie);

  return (
    <Container>
      <ExpandableContainer>
        <MoviePoster movie={movie}>
          <Genre>{genreName}</Genre>
        </MoviePoster>
        <Title>{movie.originalTitle}</Title>
        <ReleaseDurationContainer>
          <Release>{releaseYear}</Release>
          <Duration>{duration}</Duration>
        </ReleaseDurationContainer>
        <Stars stars={stars} />
        <Actions />
      </ExpandableContainer>
    </Container>
  );
};

export default MovieCard;
