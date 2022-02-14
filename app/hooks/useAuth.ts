import {NavigationService, Routes} from 'navigation';
import {useCallback} from 'react';
import { Alert } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from 'store/Auth';
import i18n from 'translations';
import {IForm} from 'types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const loading = useSelector(Selectors.getLoading);
  const error = useSelector(Selectors.getError);
  const profile = useSelector(Selectors.getProfile);
  const isAuthenticated = useSelector(Selectors.isAuthenticated);
  const accountDefault = useSelector(Selectors.getAccountDefault);
  const currencyDefault = useSelector(Selectors.getDefaultCurrency);

  /**
   ** Authorization
   ** @param form- with password
   ** @object - profile information
   */
  const onLogin = useCallback(
    (form: IForm) => {
      dispatch(
        Actions.loginRequest(form, () => NavigationService.reset(Routes.Home)),
      );
    },
    [dispatch],
  );
  
  /**
   ** Logout
   */
  const onLogout = useCallback(
    () => {
      Alert.alert('Confirmation!', 'Are you sure you want to sign-out?', [
        {
          text: i18n.t('actions.cancel'),
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: i18n.t('actions.ok'),
          onPress: () => {
            dispatch(Actions.logoutRequest());
            NavigationService.reset(Routes.Login);
          },
        },
      ])
    },
    [dispatch],
  );

  return {
    onLogin,
    onLogout,
    isAuthenticated,
    accountDefault,
    currencyDefault,
    loading,
    error,
    profile,
  };
};
