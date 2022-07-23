import MovieCard from '../movie-card/MovieCard';
import { Movie } from '../../../../models/movie';
import Title from '../../../../components/title/Title';
import { TitleWrapper, MovieList } from './styles';

interface Props {
  movies?: Movie[];
  title: string;
}

const MoviesCardList = ({ movies, title }: Props) => {
  return movies?.length ? (
    <>
      <TitleWrapper>
        <Title title={title} />
      </TitleWrapper>
      <MovieList>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieList>
    </>
  ) : null;
};

export default MoviesCardList;
