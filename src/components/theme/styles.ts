import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../../interfaces/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: { theme: ITheme }) => props.theme.fontFamily};
    font-weight: 400;
    font-style: normal;
  }
`;
