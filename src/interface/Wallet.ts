import { Request } from 'express';

export interface Wallet {
  address: string;
  private_key: string;
}

export interface RequestWallet extends Request {
  wallets?: Wallet;
}
