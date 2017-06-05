import { fromJS, Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';

import { teamImagesActionsTypes } from './teamImages.actions';

const StateRecord = new Record({
  images: List(),
  error: null,
});

const INITIAL_STATE = new StateRecord();

const teamImagesSuccess = (state = INITIAL_STATE, action) => state.set('images', fromJS(action.payload.images));
const teamImagesError = (state = INITIAL_STATE, action) => state.set('error', action.payload.error);

const HANDLERS = {
  [teamImagesActionsTypes.GET_TEAM_IMAGES_SUCCESS]: teamImagesSuccess,
  [teamImagesActionsTypes.GET_TEAM_IMAGES_ERORR]: teamImagesError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
