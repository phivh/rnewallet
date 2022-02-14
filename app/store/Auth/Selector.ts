import {createSelector} from 'reselect';
import {IProfileState} from 'types';

const selector = (state: {auth: IProfileState}) => state.auth;

export const getError = createSelector(
  selector,
  ({error}: IProfileState) => error,
);

export const getLoading = createSelector(
  selector,
  ({submitting}: IProfileState) => submitting,
);

export const getProfile = createSelector(
  selector,
  ({profile}: IProfileState) => profile,
);
export const isAuthenticated = createSelector(
  selector,
  ({profile}: IProfileState) => !!profile,
);
export const getAccountDefault = createSelector(
  selector,
  ({profile}: IProfileState) => profile?.accounts?.find(a => !!a.default),
);
export const getDefaultCurrency = createSelector(
  selector,
  ({profile}: IProfileState) => profile?.currency,
);
