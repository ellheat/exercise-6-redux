import { createSelector } from 'reselect';

const selectWeatherDomain = state => state.get('weather');

export const selectWeather = createSelector(
  selectWeatherDomain, state => state.get('data')
);
