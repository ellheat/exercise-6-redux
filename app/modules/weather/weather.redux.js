import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS } from 'immutable';

export const { Types: WeatherTypes, Creators: WeatherActions } = createActions({
  fetch: ['lat', 'lng'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'WEATHER_' });

const MenuRecord = new Record({
  data: null,
});

export const INITIAL_STATE = new MenuRecord({});

const getWeatherSuccessHandler = (state, { data }) => state.set('data', fromJS(data));

export const reducer = createReducer(INITIAL_STATE, {
  [WeatherTypes.FETCH_SUCCESS]: getWeatherSuccessHandler,
});
