export interface IAccount {
  id: number;
  name: string;
  account_number: string | number;
  default: boolean;
}
export interface IProfile {
  currency: string;
  accounts: Array<IAccount>;
}
export interface IProfileState {
  submitting: boolean;
  error: string | null;
  profile: IProfile | null;
}
export interface IForm {
  password: string;
}
