import numeral from 'numeral';
import _chunk from 'lodash/chunk';
import _replace from 'lodash/replace';

export const formatCurrency = (n: number, currency: string) =>
  `${numeral(n).format('0,0')} ${currency.toUpperCase()}`;
export const formatNumber = (n: number) => numeral(n).format('0,0');
export const convertString2Number = (n: string) => numeral(n);

export const formatAccountNumber = (v: string) =>
  _replace(_chunk(v, 4).join(' '), /([,])+/g, '');
export const maskAccountNumber = (v: string) =>
  [v.slice(0, 4), v.slice(v.length - 4)].join('...');
