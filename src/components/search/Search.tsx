import SearchIcon from '../icons/SearchIcon';
import { Container, Input, SearchWrapper } from './styles';
import useSearch from './useSearch';

interface Props {
  onSearch: (search: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const { onChange } = useSearch(onSearch);

  return (
    <Container>
      <Input placeholder="Search..." onChange={onChange} />
      <SearchWrapper>
        <SearchIcon />
      </SearchWrapper>
    </Container>
  );
};

export default Search;
