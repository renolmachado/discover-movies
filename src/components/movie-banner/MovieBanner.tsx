import {useGetMovieById} from '../../hooks/services/useMovies';
import useGetGenreById from '../../hooks/useGetGenreById';
import { Movie } from '../../models/movie';
import { timeConvert } from '../../utils/number';
import PlayIcon from '../icons/PlayIcon';
import PlusIcon from '../icons/PlusIcon';
import { AddToList, ButtonsContainer, Container, MovieDescription, MovieTitle, Span, SpanContainer, WatchNow } from './styles';

interface MovieBannerProps {
  movie: Movie;
}

const MovieBanner = ({ movie }: MovieBannerProps): JSX.Element => {
  const { data: fetchedMovie } = useGetMovieById(movie?.id);
  const genreIds = movie?.genreIds ?? [];
  const genreName = useGetGenreById(genreIds);
  const releaseYear = movie?.releaseDate.split('-')[0];
  const duration = timeConvert(fetchedMovie?.runtime || 0);

  return (
    <Container movie={movie}>
      <SpanContainer>
        <Span>{genreName || '-'}</Span>
        <Span>{releaseYear || '-'}</Span>
        <Span>{duration}</Span>
      </SpanContainer>
      <MovieTitle>{movie.originalTitle}</MovieTitle>
      <MovieDescription>{movie.overview}</MovieDescription>
      <ButtonsContainer>
        <WatchNow>
          Watch Now <PlayIcon />
        </WatchNow>
        <AddToList>
          Add to List <PlusIcon />
        </AddToList>
      </ButtonsContainer>
    </Container>
  );
};

export default MovieBanner;
