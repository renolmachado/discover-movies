import NextIcon from '../icons/NextIcon';
import PreviousIcon from '../icons/PreviousIcon';
import { PaginationContainer, Button, NextText, PreviousText } from './styles';

interface Props {
  page?: number;
  totalPages?: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination = ({ page, totalPages, onNext, onPrevious }: Props) => {
  const isPreviousButtonActive = !!page && page > 1;
  const isNextButtonActive = page !== totalPages;

  return (
    <PaginationContainer>
      <Button isActive={isPreviousButtonActive} onClick={onPrevious}>
        <PreviousIcon />
        <PreviousText>Previous</PreviousText>
      </Button>
      <Button isActive={isNextButtonActive} onClick={onNext}>
        <NextText>Next</NextText>
        <NextIcon />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
