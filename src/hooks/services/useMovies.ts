import { useQuery } from '@tanstack/react-query';
import { discoverMoviesAsync } from '../../api/movies';

export const useDiscoverMovies = () => {
  return useQuery(['movies'], discoverMoviesAsync);
};
