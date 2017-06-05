import { createSelector } from 'reselect';

export const selectTeamDomain = state => state.get('team');

export const selectTeamName = createSelector(
  selectTeamDomain, state => state.get('name')
);

export const selectTeamTitle = createSelector(
  selectTeamDomain, state => state.get('title')
);
