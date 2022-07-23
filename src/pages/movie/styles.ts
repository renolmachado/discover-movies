import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Status = styled.span`
  font-size: 39px;
  color: #ffffff;
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