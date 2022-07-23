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
    align-items: initial;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MoviesPage = styled.div`
  background-color: ${({ theme }: Props) => theme.colors.background };
  min-height: 100vh;
`