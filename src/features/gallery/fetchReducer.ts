import { 
  FETCH_ALL_STARTED,
  FETCH_ALL_SUCCEEDED,
  FETCH_FAILED,
  FetchState,
  Action } from './types';

export const fetchState: FetchState = {
  error: null,
  isLoading: false,
  status: '',
  films: {
    hasNext: null,
    data: []
  },
  people: {
    hasNext: null,
    data: []
  },
  planets: {
    hasNext: null,
    data: []
  },
  species: {
    hasNext: null,
    data: []
  },
  starships: {
    hasNext: null,
    data: []
  },
  vehicles: {
    hasNext: null,
    data: []
  },
};

export const fetchReducer = (state = fetchState, action: Action): FetchState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_STARTED: {
      return {
        ...state,
        isLoading: true,
        status: 'STARTED'
      };
    }
    case FETCH_ALL_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SUCCESSFUL',
        films: payload.films,
        people: payload.people,
        planets: payload.planets,
        species: payload.species,
        starships: payload.starships,
        vehicles: payload.vehicles
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        status: 'FAILED',
        error: payload.error
      };
    }
    default: {
      return state;
    }
  }
};

export type FetchedState = ReturnType<typeof fetchReducer>