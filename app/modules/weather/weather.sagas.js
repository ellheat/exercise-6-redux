import envConfig from 'env-config';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WeatherTypes, WeatherActions } from './weather.redux';
import request from '../../utils/request';
import { round } from 'lodash';

export function* fetchWeatherSaga(cords) {
  try {
    const options = {
      method: 'GET',
    };

    const latMap = cords.lat;
    const lngMap = cords.lng;

    const data = yield call(
      request, `${envConfig.api.weather.url}?lat=${latMap}&lon=${lngMap}&APPID=${envConfig.api.weather.key}`, options
    );

    yield put(WeatherActions.fetchSuccess(data));
  } catch (e) {
    yield put(WeatherActions.fetchError(e));
  }
}

export default function* weatherSaga() {
  yield [
    takeLatest(WeatherTypes.FETCH, fetchWeatherSaga),
  ];
}
