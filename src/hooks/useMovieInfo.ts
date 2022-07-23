import { Movie } from '../models/movie';
import { timeConvert } from '../utils/number';
import { useGetMovieById } from './services/useMovies';
import useGetGenreById from './useGetGenreById';

interface UseMovieInfo {
  genreName: string;
  releaseYear: string;
  duration: string;
  stars: number[];
}

const useMovieInfo = (movie: Movie): UseMovieInfo => {
  const { data: fetchedMovie } = useGetMovieById(movie?.id);
  const genreIds = movie?.genreIds ?? [];
  const genreName = useGetGenreById(genreIds);
  const releaseYear = movie?.releaseDate?.split('-')[0] ?? '';
  const duration = timeConvert(fetchedMovie?.runtime || 0);
  const voteAverage = fetchedMovie?.voteAverage || 0;
  const starsCount = Math.ceil(voteAverage / 2);
  const stars = Array.from({ length: starsCount }, (_, i) => i + 1);

  return {
    genreName,
    releaseYear,
    duration,
    stars,
  };
};

export default useMovieInfo;
