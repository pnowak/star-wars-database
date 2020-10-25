import { put, all, call } from 'redux-saga/effects';
import { FETCH_ALL_STARTED, FETCH_ALL_SUCCEEDED, FETCH_FAILED } from './types';
import { SagaIterator } from '@redux-saga/core';

const fetchJSON = async (input: string) => {
  const res = await fetch(input);
  const data = await res.json();

  return data;
};

export function* fetchAll(): SagaIterator {
  yield put({ type: FETCH_ALL_STARTED });

  try {
    const [films, people, planets, species, starships, vehicles] = yield all([
      call(fetchJSON, 'https://swapi.dev/api/films'),
      call(fetchJSON, 'https://swapi.dev/api/people'),
      call(fetchJSON, 'https://swapi.dev/api/planets'),
      call(fetchJSON, 'https://swapi.dev/api/species'),
      call(fetchJSON, 'https://swapi.dev/api/starships'),
      call(fetchJSON, 'https://swapi.dev/api/vehicles')
    ]);

    yield put({
      type: FETCH_ALL_SUCCEEDED,
      payload: {
        films: {
          hasNext: films.next,
          data: films.results
        },
        people: {
          hasNext: people.next,
          data: people.results
        }, 
        planets: {
          hasNext: planets.next,
          data: planets.results
        }, 
        species: {
          hasNext: species.next,
          data: species.results
        }, 
        starships: {
          hasNext: starships.next,
          data: starships.results
        }, 
        vehicles: {
          hasNext: vehicles.next,
          data: vehicles.results
        }
      }
    })

  } catch(error) {

    yield put({
      type: FETCH_FAILED,
      payload: { error: error.message } 
    })
  }
}