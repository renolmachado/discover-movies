import { useQuery } from '@tanstack/react-query';
import { getGenresAsync } from '../../api/genres';

export const GENRES_KEY = 'genres';

export const useGenres = () => {
  return useQuery([GENRES_KEY], getGenresAsync, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
