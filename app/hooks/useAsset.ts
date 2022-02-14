import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _pick from 'lodash/pick';

import {Actions, Selectors} from 'store/Assets';
import {ITransferForm} from 'types';
import {useAuth} from './useAuth';

export const useAsset = () => {
  const dispatch = useDispatch();
  const {accountDefault} = useAuth();
  const loading = useSelector(Selectors.getLoading);
  const error = useSelector(Selectors.getError);
  const assets = useSelector(Selectors.getAssets);
  const assetDefault = useSelector(Selectors.getAssetDefault);
  const allAssets = useSelector(Selectors.getFullAssets);

  /**
    Fetching assets
  */
  const onGetAssets = useCallback(() => {
    dispatch(Actions.assetsRequest());
  }, [dispatch]);

  /**
   ** Transfer asset to another account
   */
  const onTransfer = useCallback(
    (form: ITransferForm, cb?: () => void) => {
      dispatch(Actions.transferRequest(form, cb));
    },
    [dispatch],
  );

  /**
   ** Wallet information
   */
  const walletInfo = useMemo(
    () => ({
      ..._pick(accountDefault, ['name', 'account_number']),
      ..._pick(assetDefault, ['balance', 'currency', 'rate']),
    }),
    [accountDefault, assetDefault],
  );

  return {
    onGetAssets,
    onTransfer,
    loading,
    error,
    allAssets,
    assets,
    assetDefault,
    walletInfo,
  };
};
