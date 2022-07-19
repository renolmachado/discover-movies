import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies/Movies';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
