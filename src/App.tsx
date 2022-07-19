import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies/Movies';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
