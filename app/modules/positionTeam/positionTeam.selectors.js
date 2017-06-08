import { createSelector } from 'reselect';

export const selectPositionTeamDomain = state => state.get('positionTeam');

export const selectPositionTeam = createSelector(
  selectPositionTeamDomain, state => state.get('results')
);

export const selectPositionTeamLoading = createSelector(
  selectPositionTeamDomain, state => state.get('isLoading')
);

