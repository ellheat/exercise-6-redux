import { combineReducers } from 'redux-immutable';

import routerReducer from './router/router.redux';
import teamsReducer from './teams/teams.reducer';
import teamReducer from './team/team.reducer';
import teamImagesReducer from './teamImages/teamImages.reducer';
import { reducer as weatherReducer } from './weather/weather.redux';


export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    teams: teamsReducer,
    team: teamReducer,
    teamImages: teamImagesReducer,
    weather: weatherReducer,
  });
}
