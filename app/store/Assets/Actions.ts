import {createActions} from 'reduxsauce';

const instance = createActions({
  assetsRequest: [],
  assetsSuccess: ['payload'],
  assetsFailure: ['error'],

  transferRequest: ['form', 'cb'],
  transferSuccess: ['payload'],
  transferFailure: ['error'],
});

export const Types = instance.Types;

export const Actions = instance.Creators;
