import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
  mobileFontSize: number;
}

export const StyledTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }: Props) => theme.colors.texts.primary};

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    font-size: ${({ mobileFontSize }: Props) => mobileFontSize}px;
  }
`;
