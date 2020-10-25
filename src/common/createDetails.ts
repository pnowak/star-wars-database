import { FilmAttributes, CommonAttributes } from '../app/types';

type detail = {
  [key: string]: string | string[]
};

export function createDetails(state: FilmAttributes | CommonAttributes): detail[] {
  let key: keyof typeof state;
  const result: detail[] = [];

  for (key in state) {
    let value: string | string[] = state[key];

    if (Array.isArray(value)) {
      value = value.map(v => `<a href="${v}">${v}</a>\n`);
    }

    if (typeof value === 'string' && value.startsWith('http')) {
      value = `<a href="${value}">${value}</a>`;
    }

    result.push({[key]: value});
  }

  return result;
}