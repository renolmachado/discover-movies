import { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

interface UseSearch {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}

const useSearch = (onSearch: (search: string) => void): UseSearch => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    onSearch(debouncedSearch)
  }, [debouncedSearch, onSearch]);

  return { onChange, isActive: !!search };
};

export default useSearch;
