import { Request } from 'express';

export interface Wallet {
  address: string;
  private_key: string;
  amount: number;
}

export interface RequestWallet extends Request {
  wallets?: Wallet;
}
