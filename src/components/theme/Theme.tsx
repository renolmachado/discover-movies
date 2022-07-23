import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ITheme } from '../../interfaces/theme';
import useWindowSize from '../../hooks/useWindowSize';
import { GlobalStyle } from './styles';

interface Props {
  children: React.ReactNode;
}

const MIN_DESKTOP_WIDTH = 1024;

const Theme = ({ children }: Props) => {
  const [theme, setTheme] = useState<ITheme>({
    isMobile: false,
    fontFamily: 'Poppins',
    colors: {
      primary: '#192AC3',
      container: '#151515',
      background: '#080808',
      texts: {
        primary: '#ffffff',
      },
    },
    mobileMaxWidth: MIN_DESKTOP_WIDTH,
  });
  const { width } = useWindowSize();

  useEffect(() => {
    setTheme((currentTheme) => ({ ...currentTheme, isMobile: width <= MIN_DESKTOP_WIDTH }));
  }, [width]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
