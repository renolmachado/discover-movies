import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Theme from './components/theme/Theme';
import { useGenres } from './hooks/services/useGenres';
import Movies from './pages/movies/Movies';

function App(): JSX.Element {
  useGenres();

  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </Theme>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
