import * as Reducer from './Reducer';
import {IAssetsState} from 'types';
import {assetsMock} from '../../server';

const assets: IAssetsState = {
  assets: null,
  submitting: false,
  error: null,
};

describe('Card - Reducer', () => {
  describe('Request', () => {
    it('has handle card request', () => {
      expect(Reducer.assetsRequest()).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: true,
      });
    });
    it('has handle assets success', () => {
      // @ts-ignore
      expect(Reducer.assetsSuccess(assets, {payload: assetsMock})).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: false,
        assets: assetsMock,
      });
    });
    it('has handle assets failure', () => {
      expect(Reducer.assetsFailure(assets, {error: 'error'})).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: false,
        error: 'error',
      });
    });
  });
});
