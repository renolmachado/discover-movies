export interface IPagination<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
} 