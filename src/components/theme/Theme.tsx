import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ITheme } from '../../interfaces/theme';
import useWindowSize from '../../hooks/useWindowSize';

interface Props {
  children: React.ReactNode;
}

const MIN_DESKTOP_WIDTH = 1024;

const Theme = ({ children }: Props) => {
  const [theme, setTheme] = useState<ITheme>({ isMobile: false });
  const { width } = useWindowSize();

  useEffect(() => {
    setTheme((currentTheme) => ({ ...currentTheme, isMobile: width <= MIN_DESKTOP_WIDTH }));
  }, [width]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
