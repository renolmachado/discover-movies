import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { discoverMoviesAsync, getMovieByIdAsync } from '../../api/movies';
import { RootState } from '../../store/store';

export const useDiscoverMovies = () => {
  const filters = useSelector((state: RootState) => state.filter);
  const withGenres = useMemo(() => {
    return Object.keys(filters.selectedGenres).reduce((result, genreId) => {
      const isGenreIncluded = filters.selectedGenres[Number(genreId)];
      if (isGenreIncluded) {
        return result ? result + ',' + genreId : genreId;
      }

      return result;
    }, '');
  }, [filters]);

  return useQuery(['movies', withGenres, 'rating' + filters.rating], () => discoverMoviesAsync(withGenres, filters.rating));
};

export const useGetMovieById = (movieId: number) => {
  return useQuery(['movie', movieId], () => getMovieByIdAsync(movieId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
