import { camelCase } from './string';

type ValueOf<T> = T[keyof T];

export const convertKeysToCamelCase = <T = unknown>(object: T): T => {
  if (object === undefined || object === null || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map<T>((item) => convertKeysToCamelCase(item)) as unknown as T;
  }

  return Object.entries(object).reduce<T>((result, [key, value]) => {
    const resultKey = camelCase(key) as keyof T;
    result[resultKey] = convertKeysToCamelCase<ValueOf<T>>(value);
    return result;
  }, {} as T);
};
