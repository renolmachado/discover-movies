import { ReactNode } from 'react';
import { Movie } from '../../models/movie';
import { Placeholder, Poster } from './styles';

interface Props {
  movie: Movie;
  children?: ReactNode;
}

const MoviePoster = ({ movie, children }: Props) => {
  if (!movie.posterPath) {
    return <Placeholder />;
  }

  return <Poster movie={movie}>{children}</Poster>;
};

export default MoviePoster;
