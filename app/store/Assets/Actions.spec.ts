import {Actions, Types} from './Actions';
import {assetsMock} from '../../server';

describe('Assets - Actions', () => {
  describe('Assets Request', () => {
    it('has action assets request', () => {
      const expected = {
        type: Types.ASSETS_REQUEST,
      };
      expect(Actions.assetsRequest()).toEqual(expected);
    });
  });
  it('has action assets success', () => {
    const assets = assetsMock;

    const expected = {
      payload: {...assets},
      type: Types.ASSETS_SUCCESS,
    };

    expect(Actions.assetsSuccess({...assets})).toEqual(expected);
  });
  it('has action assets failure', () => {
    const error = 'something wrong';
    const expected = {
      error,
      type: Types.ASSETS_FAILURE,
    };
    expect(Actions.assetsFailure(error)).toEqual(expected);
  });

  describe('Transfer Request', () => {
    it('has action transfer', () => {
      const expected = {
        type: Types.TRANSFER_REQUEST,
      };
      expect(Actions.transferRequest()).toEqual(expected);
    });
  });
  it('has action transfer success', () => {
    const assets = assetsMock;

    const expected = {
      payload: {...assets},
      type: Types.TRANSFER_SUCCESS,
    };

    expect(Actions.transferSuccess({...assets})).toEqual(expected);
  });
  it('has action transfer failure', () => {
    const error = 'something wrong';
    const expected = {
      error,
      type: Types.TRANSFER_FAILURE,
    };
    expect(Actions.transferFailure(error)).toEqual(expected);
  });
});
