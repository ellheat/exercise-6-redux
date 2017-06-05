import { createSelector } from 'reselect';
import { selectTeamDomain } from '../team/team.selectors';

export const selectTeamImages = createSelector(
  selectTeamDomain, state => state.get('images')
);

