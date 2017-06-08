import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { positionTeamActionsTypes } from './positionTeam.actions';

const StateRecord = new Record({
  results: List(),
  isLoading: false,
  error: null,
});

const INITIAL_STATE = new StateRecord();

const getPositionTeam = (state = INITIAL_STATE) => state.merge({
  results: fromJS([]),
  isLoading: true,
});

const positionTeamSuccess = (state = INITIAL_STATE, action) => state.merge({
  results: fromJS(action.payload.results),
  isLoading: false,
});

const positionTeamError = (state = INITIAL_STATE, action) => state.merge({
  error: action.payload.error,
  isLoading: false,
});

const HANDLERS = {
  [positionTeamActionsTypes.GET_POSITION_TEAM]: getPositionTeam,
  [positionTeamActionsTypes.GET_POSITION_TEAM_SUCCESS]: positionTeamSuccess,
  [positionTeamActionsTypes.GET_POSOTION_TEAM_ERORR]: positionTeamError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
