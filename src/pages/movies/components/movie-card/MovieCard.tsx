import { useNavigate } from 'react-router-dom';
import useMovieInfo from '../../../../hooks/useMovieInfo';
import { Movie } from '../../../../models/movie';
import MoviePoster from '../../../../components/movie-poster/MoviePoster';
import Actions from './components/Actions';
import Stars from './components/Stars';
import { Container, Duration, ExpandableContainer, Genre, PosterWrapper, Release, ReleaseDurationContainer, Title } from './styles';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { genreName, duration, releaseYear, stars } = useMovieInfo(movie);
  const navigate = useNavigate();

  const goToMovieDetails = () => {
    navigate('./' + movie.id);
  };

  return (
    <Container onClick={goToMovieDetails}>
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
