import CheckboxIcon from '../../../../../../components/icons/CheckboxIcon';
import { CheckboxContainer, FilterContainer, FilterTitle, GenreLabel, GenresContainer } from '../styles';
import useGenreFilter from './useGenreFilter';

const GenreFilter = () => {
  const { genres, isGenreChecked, toggleFilteredGenre } = useGenreFilter();

  return (
    <FilterContainer>
      <FilterTitle>Category</FilterTitle>
      <GenresContainer>
        {genres.map((genre) => (
          <CheckboxContainer onClick={toggleFilteredGenre(genre.id)} key={genre.id}>
            <CheckboxIcon isSelected={isGenreChecked(genre.id)} />
            <GenreLabel isSelected={isGenreChecked(genre.id)}>{genre.name}</GenreLabel>
          </CheckboxContainer>
        ))}
      </GenresContainer>
    </FilterContainer>
  );
};

export default GenreFilter;
