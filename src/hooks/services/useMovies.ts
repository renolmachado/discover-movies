import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { discoverMoviesAsync, getMovieByIdAsync, getRelatedMoviesAsync, getTopRatedMoviesAsync, searchMoviesAsync } from '../../api/movies';
import { RootState } from '../../store/store';

export const useDiscoverMovies = (isEnabled: boolean, currentPage: number) => {
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

  return useQuery(['movies', withGenres, 'rating', filters.rating, 'page', currentPage], () => discoverMoviesAsync(withGenres, filters.rating, currentPage), {
    enabled: isEnabled,
  });
};

export const useSearchMovies = (search: string, currentPage: number) => {
  return useQuery(['movies', 'search', search, 'page', currentPage], () => searchMoviesAsync(search, currentPage), {
    enabled: !!search,
  });
};

export const useGetMovieById = (movieId: number) => {
  return useQuery(['movie', movieId], () => getMovieByIdAsync(movieId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export const useGetRelatedMovies = (movieId: number) => {
  return useQuery(['related_movies', movieId], () => getRelatedMoviesAsync(movieId));
};

export const useTopRatedMovies = () => {
  return useQuery(['top_rated'], getTopRatedMoviesAsync);
};
