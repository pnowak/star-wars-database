import { 
  FETCH_SEARCH_SUCCEEDED,
  FETCH_SEARCH_FAILED,
  SearchState,
  SearchAction } from './types';

export const fetchState: SearchState = {
  error: null,
  isLoading: false,
  status: '',
  result: null,
};

export const fetchSearchReducer = (state = fetchState, action: SearchAction): SearchState => {
  const { type } = action;
  console.log(type, action);

  switch (type) {
    case FETCH_SEARCH_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        status: 'SEARCH_SUCCESSFUL',
        result: action.result,
      };
    }
    case FETCH_SEARCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        status: 'SEARCH_FAILED',
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export type FetchedSearchState = ReturnType<typeof fetchSearchReducer>