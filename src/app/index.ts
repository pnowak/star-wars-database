import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { filterReducer } from '../features/categories/filterReducer';

export const rootReducer = combineReducers({
  error: fetchReducer,
  isLoading: fetchReducer,
  status: fetchReducer,
  films: fetchReducer,
  people: fetchReducer,
  planets: fetchReducer,
  species: fetchReducer,
  starships: fetchReducer,
  vehicles: fetchReducer,
  filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>