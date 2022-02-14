import {expectSaga} from 'redux-saga-test-plan';
import * as Sagas from './Saga';
import {Actions} from './Actions';
import * as assetsService from 'services';
import {throwError} from 'redux-saga-test-plan/providers';
import {call} from '@redux-saga/core/effects';
import {assetsMock} from '../../server';

describe('Assets - request saga', () => {
  it('has an action handle failure', () => {
    const mgs = 'Error message';
    const expectedException = new Error(mgs);

    return expectSaga(Sagas.fetchAssets)
      .provide([[call(assetsService.getAssets), throwError(expectedException)]])
      .put(Actions.assetsFailure(mgs))
      .run();
  });

  it('has an action handle success', () => {
    return expectSaga(Sagas.fetchAssets)
      .provide([[call(assetsService.getAssets), {data: {data: assetsMock}}]])
      .put({
        type: 'ASSETS_SUCCESS',
        payload: [...assetsMock],
      })
      .dispatch({type: 'ASSETS_SUCCESS', payload: assetsMock})
      .run();
  });
});
