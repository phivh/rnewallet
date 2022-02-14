import {endpoints} from 'configs';
import {IForm} from 'types';
import {client} from './fetch';

export const login = (form: IForm) => client.post(endpoints.login, form);
