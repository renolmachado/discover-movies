import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const StyledTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }: Props) => theme.colors.texts.primary};
`;
