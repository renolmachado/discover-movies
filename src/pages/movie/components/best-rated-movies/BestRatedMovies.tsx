import Title from '../../../../components/title/Title';
import { useGetTopRatedMovies } from '../../../../hooks/services/useMovies';
import MovieCard from '../movie-card/MovieCard';
import { MovieCardWrapper, MoviesList } from '../../styles';
import { TitleWrapper } from './styles';

const BestRatedMovies = () => {
  const { data: result } = useGetTopRatedMovies();
  const movies = result?.results.slice(0, 5) ?? [];

  return (
    <>
      <TitleWrapper>
        <Title title="Best Rated" />
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

export default BestRatedMovies;
