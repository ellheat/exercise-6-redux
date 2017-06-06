import { combineReducers } from 'redux-immutable';

import routerReducer from './router/router.redux';
import teamsReducer from './teams/teams.reducer';
import teamReducer from './team/team.reducer';
import teamImagesReducer from './teamImages/teamImages.reducer';
import positionTeamReducer from './positionTeam/positionTeam.reducer';


export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    teams: teamsReducer,
    team: teamReducer,
    teamImages: teamImagesReducer,
    positionTeam: positionTeamReducer,
  });
}
