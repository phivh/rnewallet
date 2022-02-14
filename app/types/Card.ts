export interface ICard {
  balance: number;
  account_number: string;
  rate: number;
  currency: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv: string | number;
  brand: string;
  limit?: number;
  spending?: number;
}
export interface ICardState {
  submitting: boolean;
  error: string | null;
  card: ICard | null;
}
