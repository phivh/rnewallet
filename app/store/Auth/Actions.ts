import {createActions} from 'reduxsauce';

const instance = createActions({
  loginRequest: ['form', 'cb'],
  loginSuccess: ['payload'],
  loginFailure: ['error'],
  logoutRequest: [],
});

export const Types = instance.Types;

export const Actions = instance.Creators;
