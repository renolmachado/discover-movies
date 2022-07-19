import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Theme from './components/theme/Theme';
import Movies from './pages/movies/Movies';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </Theme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
