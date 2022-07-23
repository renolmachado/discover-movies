import { useSelector } from 'react-redux';
import { changeRating } from '../../../../../../store/slices/filterSlice';
import { RootState, useAppDispatch } from '../../../../../../store/store';

interface UseRatingFilter {
  stars: number[];
  isFilled: (ratingValue: number) => boolean;
  onStarClicked: (ranking: number) => () => void;
}

const useRatingFilter = (): UseRatingFilter => {
  const rating = useSelector((state: RootState) => state.filter.rating);
  const dispatch = useAppDispatch();
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const isFilled = (ratingValue: number): boolean => {
    return !!rating && ratingValue * 2 <= rating;
  };

  const onStarClicked = (ranking: number) => {
    return () => {
      const rankingValueMultiplier = 2;
      dispatch(changeRating(ranking * rankingValueMultiplier));
    };
  };

  return {
    isFilled,
    stars,
    onStarClicked,
  };
};

export default useRatingFilter;
