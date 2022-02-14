import {createSelector} from 'reselect';
import {IAssetsState} from 'types';

const selector = (state: {assets: IAssetsState}) => state.assets;

export const getError = createSelector(
  selector,
  ({error}: IAssetsState) => error,
);

export const getLoading = createSelector(
  selector,
  ({submitting}: IAssetsState) => submitting,
);

export const getFullAssets = createSelector(
  selector,
  ({assets}: IAssetsState) => assets,
);
export const getAssets = createSelector(selector, ({assets}: IAssetsState) =>
  assets?.filter(ast => !ast.default),
);
export const getAssetDefault = createSelector(
  selector,
  ({assets}: IAssetsState) => assets?.find(ast => !!ast.default),
);
