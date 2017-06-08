import { Record } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamActionsTypes } from './team.actions';

const StateRecord = new Record({
  name: null,
  title: null,
  code: null,
});

const INITIAL_STATE = new StateRecord();

const changeTeam = (state = INITIAL_STATE, action) => state.merge({
  name: action.payload.name,
  title: action.payload.title,
  code: action.payload.code,
});

export default createReducer(INITIAL_STATE, {
  [teamActionsTypes.CHANGE_TEAM]: changeTeam,
});
