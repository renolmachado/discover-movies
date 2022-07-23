import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Theme from './components/theme/Theme';
import { useGenres } from './hooks/services/useGenres';
import Movie from './pages/movie/Movie';
import Movies from './pages/movies/Movies';

function App(): JSX.Element {
  useGenres();

  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="movies" />} />
            <Route path="movies">
              <Route path="" element={<Movies />} />
              <Route path=":id" element={<Movie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Theme>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
