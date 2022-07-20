import { useQuery } from '@tanstack/react-query';
import { discoverMoviesAsync, getMovieByIdAsync } from '../../api/movies';

export const useDiscoverMovies = () => {
  return useQuery(['movies'], discoverMoviesAsync);
};

export const useGetMovieById = (movieId: number) => {
  return useQuery(['movie', movieId], () => getMovieByIdAsync(movieId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
