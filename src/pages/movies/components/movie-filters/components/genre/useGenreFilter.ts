import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { GENRES_KEY } from '../../../../../../hooks/services/useGenres';
import { GenreMap } from '../../../../../../interfaces/genre-map';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../../store/store';
import { toggleGenre } from '../../../../../../store/slices/filterSlice';
import { Genre } from '../../../../../../models/genre';

interface UseGenreFilter {
  genres: Genre[];
  toggleFilteredGenre: (genreId: number) => () => void;
  isGenreChecked: (genreId: number) => boolean;
}

const useGenreFilter = (): UseGenreFilter => {
  const queryClient = useQueryClient();
  const genreMap = queryClient.getQueryData<GenreMap>([GENRES_KEY]);
  const selectedGenres = useSelector((state: RootState) => state.filter.selectedGenres);
  const dispatch = useAppDispatch();
  const genres: Genre[] = useMemo(() => {
    const keys = Object.keys(genreMap ?? {});
    const genres = keys.map<Genre>((genreId) => ({
      name: genreMap![Number(genreId)],
      id: Number(genreId),
    }));

    return genres.sort((genreA, genreB) => genreA.name.localeCompare(genreB.name));
  }, [genreMap]);

  const toggleFilteredGenre = (genreId: number) => {
    return () => dispatch(toggleGenre(genreId));
  };

  const isGenreChecked = (genreId: number): boolean => {
    return selectedGenres[genreId];
  };

  return {
    genres,
    toggleFilteredGenre,
    isGenreChecked,
  };
};

export default useGenreFilter;
