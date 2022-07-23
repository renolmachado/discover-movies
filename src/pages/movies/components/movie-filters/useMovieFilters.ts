import { useState, useEffect } from 'react';
import useSearch from '../../hooks/useSearch';

interface UseMovieFilters {
  isFilterVisible: boolean;
  toggleFilter: () => void;
}

const useMovieFilters = (): UseMovieFilters => {
  const { isSearching } = useSearch();
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleFilter = () => {
    if (!isSearching) {
      setIsFilterVisible((current) => !current);
    }
  };

  useEffect(() => {
    if (isSearching && isFilterVisible) {
      setIsFilterVisible(false);
    }
  }, [isSearching, isFilterVisible]);

  return {
    isFilterVisible,
    toggleFilter
  };
};

export default useMovieFilters;
