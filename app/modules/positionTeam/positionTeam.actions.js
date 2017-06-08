import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getPositionTeam: ['payload'],
  getPositionTeamSuccess: ['payload'],
  getPositionTeamError: ['payload', 'error'],
}, {});

export const positionTeamActions = Creators;
export const positionTeamActionsTypes = Types;
