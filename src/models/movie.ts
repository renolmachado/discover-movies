import { Genre } from './genre';

export interface Movie {
  id: number;
  originalTitle: string;
  backdropPath: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  runtime?: number;
  genres?: Genre[];
  genreIds?: number[];
}
