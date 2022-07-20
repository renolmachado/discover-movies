import { useGetMovieById } from '../../hooks/services/useMovies';
import useGetGenreById from '../../hooks/useGetGenreById';
import { Movie } from '../../models/movie';
import { timeConvert } from '../../utils/number';
import { SpanContainer, Span } from './styles';

interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  const { data: fetchedMovie } = useGetMovieById(movie?.id);
  const genreIds = movie?.genreIds ?? [];
  const genreName = useGetGenreById(genreIds);
  const releaseYear = movie?.releaseDate.split('-')[0];
  const duration = timeConvert(fetchedMovie?.runtime || 0);

  return (
    <SpanContainer>
      <Span>{genreName || '-'}</Span>
      <Span>{releaseYear || '-'}</Span>
      <Span>{duration}</Span>
    </SpanContainer>
  );
};

export default MovieInfo;
