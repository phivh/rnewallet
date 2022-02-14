import {createReducer} from 'reduxsauce';
import {IProfile, IProfileState} from 'types';
import {Types} from './Actions';

export const INITIAL_STATE: IProfileState = {
  submitting: false,
  error: null,
  profile: null,
};

export const loginRequest = () => ({
  ...INITIAL_STATE,
  submitting: true,
});

export const loginSuccess = (
  state: IProfileState,
  {payload}: {payload: IProfile},
) => ({
  ...state,
  error: null,
  submitting: false,
  profile: payload,
});

export const loginFailure = (
  state: IProfileState,
  {error}: {error: string},
) => ({
  ...state,
  error,
  submitting: false,
});

export const logoutRequest = () => ({
  ...INITIAL_STATE,
});

export const auth = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT_REQUEST]: logoutRequest,
});
