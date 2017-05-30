import { combineReducers } from 'redux-immutable';

import routerReducer from './router/router.redux';
import localesReducer from './locales/locales.redux';
import teamsReducer from './teams/teams.reducer';


export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    teams: teamsReducer,
    locales: localesReducer,
  });
}
