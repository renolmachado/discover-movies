const API_KEY = process.env.REACT_APP_API_KEY || 'ad9b78895722eed18d61e16dedac74b0';
const API = process.env.REACT_APP_API || 'https://api.themoviedb.org/3/';

export const getFullPath = (resource: string): string => {
  return API + resource + '?api_key=' + API_KEY;
};
