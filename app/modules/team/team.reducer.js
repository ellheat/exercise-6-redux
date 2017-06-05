import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamActionsTypes } from './team.actions';

const StateRecord = new Record({
  name: null,
  title: null,
});

const INITIAL_STATE = new StateRecord();

const changeTeam = (state = INITIAL_STATE, action) => state.merge({
  name: action.payload.name,
  title: action.payload.title,
});

const HANDLERS = {
  [teamActionsTypes.CHANGE_TEAM]: changeTeam,
};

export default createReducer(INITIAL_STATE, HANDLERS);
