import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../../interfaces/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: { theme: ITheme }) => props.theme.fontFamily};
    font-weight: 400;
    font-style: normal;

    &::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #151515ab;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #11171a;
      border-radius: 10px;
    }
  }
`;
