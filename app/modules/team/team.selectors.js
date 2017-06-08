import { createSelector } from 'reselect';
import { find } from 'lodash';
import Stadiums from '../../fixtures/stadiums.json';

export const selectTeamDomain = state => state.get('team');

export const selectTeamName = createSelector(
  selectTeamDomain, state => state.get('name')
);

export const selectTeamTitle = createSelector(
  selectTeamDomain, state => state.get('title')
);

export const selectTeamCode = createSelector(
  selectTeamDomain, state => state.get('code')
);

export const selectTeamStadium = createSelector(
  selectTeamCode, code => find(Stadiums, (item) => item.code === code)
);
