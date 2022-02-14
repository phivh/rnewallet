import {useCallback} from 'react';
import {NavigationService, Routes} from 'navigation';

export const useWallet = () => {
  const onTransfer = useCallback(
    () => NavigationService.navigate(Routes.Transfer),
    [],
  );

  return {
    onTransfer,
  };
};
