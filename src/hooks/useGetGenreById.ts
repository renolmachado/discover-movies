import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { GenreMap } from '../interfaces/genre-map';
import { GENRES_KEY } from './services/useGenres';

const useGetGenreById = (genreIds: number[]): string => {
  const queryClient = useQueryClient();
  const genreMap = queryClient.getQueryData<GenreMap>([GENRES_KEY]);
  const genreName = useMemo(() => {
    let genre = '';
    if (genreMap) {
      genreIds.forEach((genreId) => (genre = genre || genreMap[genreId]));
    }
    genre = genre || 'No Genre';
    
    return genre;
  }, [genreIds, genreMap]);

  return genreName;
};

export default useGetGenreById;
