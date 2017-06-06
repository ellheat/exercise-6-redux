import { createSelector } from 'reselect';

export const selectTeamImagesDomain = state => state.get('teamImages');

export const selectTeamImages = createSelector(
  selectTeamImagesDomain, state => state.get('images')
);

export const selectTeamImagesLoading = createSelector(
  selectTeamImagesDomain, state => state.get('isLoading')
);

