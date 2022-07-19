import React from 'react';
import { useDebounce } from './useDebounce';

interface UseWindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): UseWindowSize {
  const [windowSize, setWindowSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });
  const debouncedWindowSize = useDebounce(windowSize, 500);

  function changeWindowSize(): void {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return debouncedWindowSize;
}
