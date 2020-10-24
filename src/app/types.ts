export const FETCH_ALL_REQUEST = 'FETCH_ALL_REQUEST';
export const FETCH_ALL_STARTED = 'FETCH_ALL_STARTED';
export const FETCH_ALL_SUCCEEDED = 'FETCH_ALL_SUCCEEDED';
export const FETCH_ALL_FAILED = 'FETCH_ALL_FAILED';

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

type Films = {
    hasNext: string | null,
    data: FilmAttributes[]
};

type Rest = {
    hasNext: string | null,
    data: CommonAttributes[]
}

export type Filter = 'all' | 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

export type AppState = {
    error: null | string,
    filter: Filter,
    isLoading: boolean,
    status: 'STARTED' | 'SUCCESSFUL'| 'FAILED' | '',
    films: Films,
    people: Rest,
    planets: Rest,
    species: Rest,
    starships: Rest,
    vehicles: Rest
};

export type Action =  {
    type: typeof FETCH_ALL_STARTED | typeof FETCH_ALL_STARTED | typeof FETCH_ALL_SUCCEEDED | typeof FETCH_ALL_FAILED;
    status: string,
    isLoading: boolean,
    payload: { 
        films: Films,
        people: Rest,
        planets: Rest,
        species: Rest,
        starships: Rest,
        vehicles: Rest,
        error: string
    }
};