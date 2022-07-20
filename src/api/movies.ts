import axios from 'axios';
import { IPagination } from '../interfaces/pagination';
import { Movie } from '../models/movie';
import { convertKeysToCamelCase } from '../utils/object-keys';
import { getFullPath } from './api-helper';

export const discoverMoviesAsync = async (): Promise<IPagination<Movie>> => {
  const path = getFullPath('discover/movie');
  const { data } = await axios.get(path);
  const movies = convertKeysToCamelCase<IPagination<Movie>>(data);

  return movies;
};

export const getMovieByIdAsync = async (movieId: number): Promise<Movie> => {
  const path = getFullPath('movie/' + movieId);
  const { data } = await axios.get(path);
  const movie = convertKeysToCamelCase<Movie>(data);
  movie.genreIds = movie.genres?.map(genre => genre.id);

  return movie;
};
