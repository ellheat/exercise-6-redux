import envConfig from 'env-config';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WeatherTypes, WeatherActions } from './weather.redux';
import request from '../../utils/request';

export function* fetchWeatherSaga() {
  try {
    const options = {
      method: 'GET',
    };

    const data = yield call(
      request, `${envConfig.api.weather.url}?lat=${35}&lon=${123}&APPID=${envConfig.api.weather.key}`, options
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
