import {endpoints} from 'configs';
import {ITransferForm} from 'types';
import {client} from './fetch';

export const getAssets = () => client.get(endpoints.assets);
export const transfer = (form: ITransferForm) =>
  client.post(endpoints.transfer, form);
