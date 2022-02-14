import {put, call} from 'redux-saga/effects';
import {Action} from 'redux';
import {Actions} from './Actions';
import {IForm} from 'types';
import * as services from 'services';

export function* login({
  form,
  cb,
}: Action & {
  form: IForm;
  cb?: () => void;
}) {
  try {
    const {data} = yield call(services.login, form);
    yield put(Actions.loginSuccess(data.data));
    if (cb) {
      cb();
    }
  } catch (e) {
    // @ts-ignore
    yield put(Actions.loginFailure(e.message));
  }
}
