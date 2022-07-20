import axios from 'axios';
import { GenreMap } from '../interfaces/genre-map';
import { Genre } from '../models/genre';
import { getFullPath } from './api-helper';

interface GenreApiResponse {
  genres: Genre[];
}

export const getGenresAsync = async (): Promise<GenreMap> => {
  const path = getFullPath('genre/movie/list');
  const { data } = await axios.get<GenreApiResponse>(path);
  const genreMap = data.genres.reduce<GenreMap>((result, genre) => ({ ...result, [genre.id]: genre.name }), {});

  return genreMap;
};
