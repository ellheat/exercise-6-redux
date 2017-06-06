import { put, takeLatest, call } from 'redux-saga/effects';
import { stringify } from 'query-string';
import envConfig from '../../environment/base';
import request from '../../utils/request';
import { positionTeamActions, positionTeamActionsTypes } from './positionTeam.actions';
import { teamActionsTypes } from '../team/team.actions';

export function* getPositionTeamSaga(action) {
  const api = envConfig.positionApi;
  const params = {
    address: action.payload.team || 'FC Barcelona',
  };

  let uriParams = stringify(params);
  const url = `${api.baseUrl}?${uriParams}`;
  const sagaFetchingOptions = {
    method: 'GET',
  };

  try {
    const data = yield call(request, url, sagaFetchingOptions);
    yield put(positionTeamActions.getPositionTeamSuccess(data));
  } catch (error) {
    yield put(positionTeamActions.getPositionTeamError(error));
  }
}

export function* updatePositionTeamSaga(action) {
  const data = {
    team: action.payload.title,
  };
  yield put(positionTeamActions.getPositionTeam(data));
}

export default function* positionTeamSaga() {
  yield takeLatest(positionTeamActionsTypes.GET_POSITION_TEAM, getPositionTeamSaga);
  yield takeLatest(teamActionsTypes.CHANGE_TEAM, updatePositionTeamSaga);
}
