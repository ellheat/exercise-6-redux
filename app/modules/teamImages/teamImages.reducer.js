import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamImagesActionsTypes } from './teamImages.actions';

const StateRecord = new Record({
  images: List(),
  isLoading: false,
  error: null,
});

const INITIAL_STATE = new StateRecord();

const getTeamImages = (state) => state.merge({
  images: fromJS([]),
  isLoading: true,
});

const teamImagesSuccess = (state, action) => state.merge({
  images: fromJS(action.payload.images),
  isLoading: false,
});

const teamImagesError = (state, action) => state.merge({
  error: action.payload.error,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [teamImagesActionsTypes.GET_TEAM_IMAGES]: getTeamImages,
  [teamImagesActionsTypes.GET_TEAM_IMAGES_SUCCESS]: teamImagesSuccess,
  [teamImagesActionsTypes.GET_TEAM_IMAGES_ERORR]: teamImagesError,
});
