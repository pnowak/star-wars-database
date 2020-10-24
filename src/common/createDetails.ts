import { FilmAttributes, CommonAttributes } from '../app/types';

type detail = {
  [key: string]: string | string[]
};

export function createDetails(state: FilmAttributes | CommonAttributes): detail[] {
  let key: keyof typeof state;
  const result: detail[] = [];

  for (key in state) {
    const value = state[key];
      
    result.push({[key]: value});
  }

  return result;
}