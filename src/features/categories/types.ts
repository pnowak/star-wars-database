export const SET_FILTER = 'SET_FILTER';

export type Filter = 'all' | 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles' | string;

export type FilterAction = { type: typeof SET_FILTER; filter: Filter };

