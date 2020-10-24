import { 
  FETCH_ALL_STARTED,
  FETCH_ALL_SUCCEEDED,
  FETCH_ALL_FAILED,
  AppState,
  Action } from './types';

const initialState: AppState = {
  error: null,
  filter: 'all',
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

export const rootReducer = (state = initialState, action: Action): AppState => {
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
    case FETCH_ALL_FAILED: {
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

export type RootState = ReturnType<typeof rootReducer>