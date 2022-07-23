import StarIcon from '../../../../components/icons/StarIcon';
import { StarsContainer } from './styles';

interface Props {
  stars: number[];
}

const Stars = ({ stars }: Props) => {
  return (
    <StarsContainer>
      {stars.map((star) => (
        <StarIcon key={star} isFilled></StarIcon>
      ))}
    </StarsContainer>
  );
};

export default Stars;
