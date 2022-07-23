import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface UseSearch {
  isSearching: boolean;
  search: string;
}

const useSearch = (): UseSearch => {
  const { search } = useSelector((state: RootState) => state.filter);

  return {
    isSearching: !!search,
    search,
  };
};

export default useSearch;
