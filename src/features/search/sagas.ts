import { put, call, take } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCEEDED, FETCH_SEARCH_FAILED } from './types';
import { fetchJSON} from '../../common/fetchJSON';

export function* fetchSearch(): SagaIterator {
  while (true) {
    const { category, searchTerm } = yield take(FETCH_SEARCH_REQUEST);
    
    try {
      const result = yield call(fetchJSON, `https://swapi.dev/api/${category}/?search=${searchTerm}`);

      yield put({
        type: FETCH_SEARCH_SUCCEEDED,
        result
      });

    } catch(error) {

      yield put({
        type: FETCH_SEARCH_FAILED,
        payload: { error: error.message } 
      });
    }
  }
}