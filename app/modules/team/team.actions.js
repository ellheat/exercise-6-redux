import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeTeam: ['payload'],
}, {});

export const teamActions = Creators;
export const teamActionsTypes = Types;
