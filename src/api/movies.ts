import axios from 'axios';
import { IPagination } from '../interfaces/pagination';
import { Movie } from '../models/movie';
import { convertKeysToCamelCase } from '../utils/object-keys';
import { getFullPath } from './api-helper';

export const discoverMoviesAsync = async (withGenres: string, rating?: number, currentPage?: number): Promise<IPagination<Movie>> => {
  let path = getFullPath('discover/movie');
  path = withGenres ? path + '&with_genres=' + withGenres : path;
  path = rating ? path + '&vote_average.lte=' + rating + '&vote_average.gte=' + (rating - 2) : path;
  path = path + '&page=' + currentPage ?? 1;

  return await onGetMoviesAsync(path);
};

export const searchMoviesAsync = async (search: string, currentPage?: number): Promise<IPagination<Movie>> => {
  let path = getFullPath('search/movie');
  path = search ? path + '&query=' + search : path;
  path = path + '&page=' + currentPage ?? 1;

  return await onGetMoviesAsync(path);
};

export const getMovieByIdAsync = async (movieId: number): Promise<Movie> => {
  const path = getFullPath('movie/' + movieId);
  const { data } = await axios.get(path);
  const movie = convertKeysToCamelCase<Movie>(data);
  movie.genreIds = movie.genres?.map((genre) => genre.id);

  return movie;
};

const onGetMoviesAsync = async (path: string): Promise<IPagination<Movie>> => {
  const { data } = await axios.get(path);
  const movies = convertKeysToCamelCase<IPagination<Movie>>(data);

  return movies;
};
