import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 74px 150px;

  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    padding: 38px;
    flex-direction: column;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  margin-bottom: -12px;
  margin-top: 23px;
`