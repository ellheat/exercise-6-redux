import { createSelector } from 'reselect';
import { toNumber, round } from 'lodash';

const selectTeamsDomain = state => state.get('teams');

export const selectTeamsList = createSelector(
  selectTeamsDomain, state => state.get('list')
);
