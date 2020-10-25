import { SET_FILTER, Filter, FilterAction } from './types';

export const filterReducer = (state = 'all', action: FilterAction): Filter => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter
    }
    
    default: {
      return state;
    }
  }
};

export type FilterState = ReturnType<typeof filterReducer>