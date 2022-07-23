import StarIcon from '../../../icons/StarIcon';
import { FilterContainer, FilterTitle, StarContainer, StarsContainer } from '../styles';
import useRatingFilter from './useRatingFilter';

const RatingFilter = () => {
  const { stars, isFilled, onStarClicked } = useRatingFilter();

  return (
    <FilterContainer>
      <FilterTitle>Ranking</FilterTitle>
      <StarsContainer>
        {stars.map((star) => (
          <StarContainer key={star}>
            <StarIcon onClick={onStarClicked(star)} isFilled={isFilled(star)}></StarIcon>
          </StarContainer>
        ))}
      </StarsContainer>
    </FilterContainer>
  );
};

export default RatingFilter;
