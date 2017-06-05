import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getTeamImages: ['payload'],
  getTeamImagesSuccess: ['payload'],
  getTeamImagesError: ['payload', 'error'],
}, {});

export const teamImagesActions = Creators;
export const teamImagesActionsTypes = Types;
