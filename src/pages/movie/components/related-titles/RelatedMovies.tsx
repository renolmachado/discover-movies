import Title from '../../../../components/title/Title';
import { useGetRelatedMovies } from '../../../../hooks/services/useMovies';
import MovieCard from '../movie-card/MovieCard';
import { MovieCardWrapper, MoviesList } from '../../styles';
import { TitleWrapper } from './styles';

interface Props {
  movieId: number;
}

const RelatedMovies = ({ movieId }: Props) => {
  const { data: result } = useGetRelatedMovies(movieId);
  const movies = result?.results.slice(0, 5) ?? [];

  return (
    <>
      <TitleWrapper>
        <Title title="Browse Similar Titles" />
      </TitleWrapper>
      <MoviesList>
        {movies.map((movie) => (
          <MovieCardWrapper key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardWrapper>
        ))}
      </MoviesList>
    </>
  );
};

export default RelatedMovies;
