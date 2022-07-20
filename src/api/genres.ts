import axios from 'axios';
import { Genre } from '../models/genre';
import { getFullPath } from './api-helper';

interface GenreApiResponse {
  genres: Genre[];
}

export const getGenresAsync = async (): Promise<Genre[]> => {
  const path = getFullPath('genre/movie/list');
  const { data } = await axios.get<GenreApiResponse>(path);

  return data.genres;
};
