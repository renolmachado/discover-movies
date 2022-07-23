import DownArrowIcon from '../../../../components/icons/DownArrowIcon';
import GenreFilter from './components/genre/GenreFilter';
import RatingFilter from './components/rating/RatingFilter';
import { AnimatedArrow, Collapsible, Container, FilterBy } from './styles';
import useMovieFilters from './useMovieFilters';

const MovieFilters = () => {
  const { isFilterVisible, toggleFilter } = useMovieFilters();

  return (
    <Container>
      <FilterBy isFilterVisible={isFilterVisible} onClick={toggleFilter}>
        <AnimatedArrow isFilterVisible={isFilterVisible}>
          <DownArrowIcon />
        </AnimatedArrow>
        Filter by
      </FilterBy>
      <Collapsible isFilterVisible={isFilterVisible}>
        <RatingFilter></RatingFilter>
        <GenreFilter></GenreFilter>
      </Collapsible>
    </Container>
  );
};

export default MovieFilters;
