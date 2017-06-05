import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamImagesActionsTypes } from './teamImages.actions';

const StateRecord = new Record({
  images: List(),
  isLoading: false,
  error: null,
});

const INITIAL_STATE = new StateRecord();

const getTeamImages = (state = INITIAL_STATE) => state.merge({
  images: fromJS([]),
  isLoading: true,
});

const teamImagesSuccess = (state = INITIAL_STATE, action) => state.merge({
  images: fromJS(action.payload.images),
  isLoading: false,
});

const teamImagesError = (state = INITIAL_STATE, action) => state.merge({
  error: action.payload.error,
  isLoading: false,
});

const HANDLERS = {
  [teamImagesActionsTypes.GET_TEAM_IMAGES]: getTeamImages,
  [teamImagesActionsTypes.GET_TEAM_IMAGES_SUCCESS]: teamImagesSuccess,
  [teamImagesActionsTypes.GET_TEAM_IMAGES_ERORR]: teamImagesError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
