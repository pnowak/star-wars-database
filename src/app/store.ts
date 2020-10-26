import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork, takeLatest } from 'redux-saga/effects';
import { fetchAll } from '../features/gallery/sagas';
import { FETCH_ALL_REQUEST } from '../features/gallery/types';
import { fetchSearch } from '../features/search/sagas';
import { rootReducer } from './rootReducers';

function* rootSaga() {
  yield takeLatest(FETCH_ALL_REQUEST, fetchAll);
  yield fork(fetchSearch);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (storeEnhancers = []) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      ...[applyMiddleware(sagaMiddleware), ...storeEnhancers]
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
