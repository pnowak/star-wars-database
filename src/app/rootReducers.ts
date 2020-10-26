import { combineReducers } from 'redux';
import { fetchReducer } from '../features/gallery/fetchReducer';
import { filterReducer } from '../features/categories/filterReducer';
import { fetchSearchReducer } from '../features/search/fetchSearchReducer';

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
  filter: filterReducer,
  search: fetchSearchReducer
})

export type RootState = ReturnType<typeof rootReducer>