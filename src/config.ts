interface Config {
  baseImageUrl: string;
  apiKey: string;
  api: string;
}

export const CONFIG: Config = {
  baseImageUrl: process.env.REACT_BASE_IMAGE_URL || 'https://image.tmdb.org/t/p/original',
  apiKey: process.env.REACT_APP_API_KEY || 'ad9b78895722eed18d61e16dedac74b0',
  api: process.env.REACT_APP_API || 'https://api.themoviedb.org/3/',
};
