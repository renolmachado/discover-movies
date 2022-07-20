import { useQuery } from '@tanstack/react-query';
import { getGenresAsync } from '../../api/genres';

export const useGenres = () => {
  return useQuery(['genres'], getGenresAsync, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
