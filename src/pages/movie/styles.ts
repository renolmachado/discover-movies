import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Status = styled.span`
  font-size: 39px;
  color: ${({ theme }: Props) => theme.colors.texts.primary };
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HomeButton = styled.div`
  border-radius: 20px;
  background: ${(props: Props) => props.theme.colors.primary};
  padding: 10px 40px;
  margin-top: 20px;

  &:hover {
    filter: brightness(92%);
    cursor: pointer;
  }
`;

export const MoviePage = styled.div`
  background-color: ${({ theme }: Props) => theme.colors.background };
  min-height: 100vh;
  min-width: 100%;
`

export const Container = styled.div`
  padding-left: 150px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px);
`

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: flex-start;
`;

export const MovieCardWrapper = styled.div`
  margin-right: 104px;
  margin-top: 45px;
`;