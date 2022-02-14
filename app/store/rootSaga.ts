import {takeLatest, all} from 'redux-saga/effects';

import {Sagas as AuthSagas, Types as AuthTypes} from './Auth';
import {Sagas as AssetsSagas, Types as AssetsTypes} from './Assets';

export const rootSaga = function* root() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, AuthSagas.login),

    takeLatest(AssetsTypes.ASSETS_REQUEST, AssetsSagas.fetchAssets),

    takeLatest(AssetsTypes.TRANSFER_REQUEST, AssetsSagas.transfer),
  ]);
};

export default rootSaga;
