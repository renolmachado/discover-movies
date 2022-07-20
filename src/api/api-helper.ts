import { CONFIG } from '../config';

export const getFullPath = (resource: string): string => {
  return CONFIG.api + resource + '?api_key=' + CONFIG.apiKey;
};
