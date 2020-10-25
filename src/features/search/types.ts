import { CommonAttributes, FilmAttributes } from '../gallery/types';

export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCEEDED = 'FETCH_SEARCH_SUCCEEDED';
export const FETCH_SEARCH_FAILED = 'FETCH_SEARCH_FAILED';

type ResultObject = {
    count: number,
    next: string | null,
    previous: string | null,
    results: CommonAttributes[] | FilmAttributes[]
};

export type SearchState = {
    error: null | string,
    isLoading: boolean,
    status: 'SEARCH_STARTED' | 'SEARCH_SUCCESSFUL'| 'SEARCH_FAILED' | '',
    result: ResultObject | null
};

export type SearchAction =  {
    type: typeof FETCH_SEARCH_REQUEST | typeof FETCH_SEARCH_SUCCEEDED | typeof FETCH_SEARCH_FAILED;
    status: string,
    isLoading: boolean,
    result: ResultObject | null
    error: string
};