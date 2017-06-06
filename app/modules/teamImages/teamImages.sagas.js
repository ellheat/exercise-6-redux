import { put, takeLatest, call } from 'redux-saga/effects';
import { stringify } from 'query-string';
import envConfig from '../../environment/base';
import request from '../../utils/request';
import { teamImagesActions, teamImagesActionsTypes } from './teamImages.actions';
import { teamActionsTypes } from '../team/team.actions';

export const DEFAULT_IMAGES_COUNT = 12;

export function* getTeamImagesSaga(action) {
  const api = envConfig.imagesApi;
  const params = {
    fields: action.payload.fields || 'caption,display_set',
    phrase: action.payload.team,
    ['page_size']: action.payload.count || DEFAULT_IMAGES_COUNT,
  };

  let uriParams = stringify(params);
  const url = `${api.baseUrl}${api.urls.search}?${uriParams}`;
  const sagaFetchingOptions = {
    method: 'GET',
    headers: {
      'Api-key': api.key,
    },
  };

  try {
    const data = yield call(request, url, sagaFetchingOptions);
    yield put(teamImagesActions.getTeamImagesSuccess(data));
  } catch (error) {
    yield put(teamImagesActions.getTeamImagesError(error));
  }
}

export function* updateTeamImagesSaga(action) {
  const data = {
    team: action.payload.title,
  };

  yield put(teamImagesActions.getTeamImages(data));
}

export default function* teamImagesSaga() {
  yield takeLatest(teamImagesActionsTypes.GET_TEAM_IMAGES, getTeamImagesSaga);
  yield takeLatest(teamActionsTypes.CHANGE_TEAM, updateTeamImagesSaga);
}
