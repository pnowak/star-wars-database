import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { fetchAll } from './sagas';
import { FETCH_ALL_REQUEST } from './types';
import { rootReducer } from './index';

function* rootSaga() {
  yield takeLatest(FETCH_ALL_REQUEST, fetchAll);
}

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
