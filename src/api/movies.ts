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
