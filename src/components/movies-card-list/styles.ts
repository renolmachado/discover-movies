import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: -12px;
  margin-top: 23px;
`;
