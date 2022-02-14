import {IAccount} from './Profile';

export interface IAsset {
  id: number;
  balance: number;
  account_id: string | number;
  rate: number;
  currency: string;
  default: boolean;
}
export interface IAssetsState {
  submitting: boolean;
  error: string | null;
  assets: Array<IAsset> | null;
}
export interface ITransferForm {
  amount: number;
  asset_id: number;
  fee: number;
}

export type IWallet = IAsset & IAccount;
