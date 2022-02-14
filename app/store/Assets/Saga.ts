import {put, call} from 'redux-saga/effects';
import {Action} from 'redux';
import {Actions} from './Actions';
import * as services from 'services';
import {ITransferForm} from 'types';

export function* fetchAssets() {
  try {
    const {data} = yield call(services.getAssets);
    yield put(Actions.assetsSuccess(data.data));
  } catch (e) {
    // @ts-ignore
    yield put(Actions.assetsFailure(e.message));
  }
}

export function* transfer({
  form,
  cb,
}: Action & {
  form: ITransferForm;
  cb?: () => void;
}) {
  try {
    const {data} = yield call(services.transfer, form);
    yield put(Actions.assetsSuccess(data.data));
    if(cb) {
      cb();
    }
  } catch (e) {
    // @ts-ignore
    yield put(Actions.assetsFailure(e.message));
  }
}
