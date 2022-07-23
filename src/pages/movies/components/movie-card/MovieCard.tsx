import { useNavigate } from 'react-router-dom';
import useMovieInfo from '../../../../hooks/useMovieInfo';
import { Movie } from '../../../../models/movie';
import MoviePoster from '../../../../components/movie-poster/MoviePoster';
import Actions from './Actions';
import Stars from './Stars';
import { Container, Duration, ExpandableContainer, Genre, PosterWrapper, Release, ReleaseDurationContainer, Title } from './styles';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { genreName, duration, releaseYear, stars } = useMovieInfo(movie);
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('./' + movie.id)}>
      <ExpandableContainer>
        <PosterWrapper>
          <MoviePoster movie={movie}>
            <Genre>{genreName}</Genre>
          </MoviePoster>
        </PosterWrapper>
        <Title>{movie.originalTitle}</Title>
        <ReleaseDurationContainer>
          <Release>{releaseYear}</Release>
          <Duration>{duration}</Duration>
        </ReleaseDurationContainer>
        <Stars stars={stars} />
        <Actions movie={movie} />
      </ExpandableContainer>
    </Container>
  );
};

export default MovieCard;
