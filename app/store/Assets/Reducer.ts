import {createReducer} from 'reduxsauce';
import {IAsset, IAssetsState} from 'types';
import {Types} from './Actions';

export const INITIAL_STATE: IAssetsState = {
  submitting: false,
  error: null,
  assets: null,
};

export const assetsRequest = () => ({
  ...INITIAL_STATE,
  submitting: true,
});

export const assetsSuccess = (
  state: IAssetsState,
  {payload}: {payload: Array<IAsset>},
) => ({
  ...state,
  error: null,
  submitting: false,
  assets: payload,
});

export const assetsFailure = (
  state: IAssetsState,
  {error}: {error: string},
) => ({
  ...state,
  error,
  submitting: false,
});

export const transferRequest = () => ({
  ...INITIAL_STATE,
  submitting: true,
});

export const transferSuccess = (
  state: IAssetsState,
  {payload}: {payload: Array<IAsset>},
) => ({
  ...state,
  error: null,
  submitting: false,
  assets: payload,
});

export const transferFailure = (
  state: IAssetsState,
  {error}: {error: string},
) => ({
  ...state,
  error,
  submitting: false,
});

export const assets = createReducer(INITIAL_STATE, {
  [Types.ASSETS_REQUEST]: assetsRequest,
  [Types.ASSETS_SUCCESS]: assetsSuccess,
  [Types.ASSETS_FAILURE]: assetsFailure,

  [Types.TRANSFER_REQUEST]: transferRequest,
  [Types.TRANSFER_SUCCESS]: transferSuccess,
  [Types.TRANSFER_FAILURE]: transferFailure,
});
