export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_ALL_STARTED = 'FETCH_ALL_STARTED';
export const FETCH_ALL_SUCCEEDED = 'FETCH_ALL_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';

export type CommonAttributes = {
    name: string,
    url: string,
    created: string,
    films: string[]
};

export type FilmAttributes = {
    created: string,
    title: string,
    episode_id: number,
    director: string,
    characters: CommonAttributes[],
    planets: CommonAttributes[],
    species: CommonAttributes[],
    starships: CommonAttributes[],
    vehicles: CommonAttributes[],
}

type Film = {
    hasNext: string | null,
    data: FilmAttributes[]
};

type Common = {
    hasNext: string | null,
    data: CommonAttributes[]
}

export type FetchState = {
    error: null | string,
    isLoading: boolean,
    status: 'STARTED' | 'SUCCESSFUL'| 'FAILED' | '',
    films: Film,
    people: Common,
    planets: Common,
    species: Common,
    starships: Common,
    vehicles: Common
};

export type Action =  {
    type: typeof FETCH_ALL_STARTED | typeof FETCH_ALL_SUCCEEDED | typeof FETCH_FAILED;
    status: string,
    isLoading: boolean,
    payload: { 
        films: Film,
        people: Common,
        planets: Common,
        species: Common,
        starships: Common,
        vehicles: Common,
        error: string
    }
};