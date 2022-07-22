import useMovieInfo from '../../hooks/useMovieInfo';
import { Movie } from '../../models/movie';
import { SpanContainer, Span } from './styles';

interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  const { genreName, duration, releaseYear } = useMovieInfo(movie);

  return (
    <SpanContainer>
      <Span>{genreName || '-'}</Span>
      <Span>{releaseYear || '-'}</Span>
      <Span>{duration}</Span>
    </SpanContainer>
  );
};

export default MovieInfo;
