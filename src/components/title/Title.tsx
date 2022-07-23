import { StyledTitle } from './styles';

interface Props {
  title: string;
  mobileFontSize?: number;
}

const Title = ({ title, mobileFontSize }: Props) => {
  return <StyledTitle mobileFontSize={mobileFontSize || 35}>{title}</StyledTitle>;
};

export default Title;
