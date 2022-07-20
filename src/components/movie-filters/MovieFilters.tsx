import { useState } from 'react';
import DownArrowIcon from '../icons/DownArrowIcon';
import GenreFilter from './filters/genre/GenreFilter';
import RatingFilter from './filters/rating/RatingFilter';
import { AnimatedArrow, Collapsible, Container, FilterBy } from './styles';

const MovieFilters = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleFilter = () => {
    setIsFilterVisible((current) => !current);
  };

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
