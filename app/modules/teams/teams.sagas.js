import { call, put, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import envConfig from 'env-config';

import request from '../../utils/request';
import { teamsActions, teamsActionsTypes } from './teams.actions';
import { teamActions } from '../team/team.actions';


export function* fetchTeamsSaga() {
  const sagaFetchingOptions = {
    method: 'GET',
    headers: {
      'X-Auth-Token': envConfig.api.key,
    },
  };

  try {
    const data = yield call(request, `${envConfig.api.baseUrl}${envConfig.api.urls.teams}`, sagaFetchingOptions);
    yield put(teamsActions.getTeamsSuccess(data));
    yield put(teamActions.changeTeam({
      name: data.teams[0].shortName,
      title: data.teams[0].name,
      code: data.teams[0].code,
    }));
  } catch (e) {
    yield put(teamsActions.getTeamsError(e));
  }
}

export function* getTeamsSaga() {
  try {
    yield call(takeLatest, teamsActionsTypes.GET_TEAMS, fetchTeamsSaga);
  } catch (e) {
    yield put(teamsActions.getTeamsError(e));
  }
}

export default function* teamsSaga() {
  yield [
    fork(getTeamsSaga),
  ];
}
