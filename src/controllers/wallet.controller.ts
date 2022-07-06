import { NextFunction, Request, Response } from 'express';
import walletModel from '../models/wallet.model';

const walletController = {
  // Get wallet address
  async getWallet(req: Request, res: Response) {
    try {
      const wallets = await walletModel.find();

      res.status(200).json({ data: wallets });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  // POST wallet address
  async postWallet(req: Request, res: Response, next: NextFunction) {
    try {
      const wallets = req.body;

      const walletsResponse = [];

      for (let i = 0; i < wallets.length; i++) {
        const newWallet = new walletModel({
          address: wallets[i].address,
          private_key: wallets[i].privateKey,
        });
        walletsResponse.push(newWallet);
        await newWallet.save();
      }

      res.status(201).json({ data: walletsResponse });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  // PUT Update amounts
  async updateAmounts(req: Request, res: Response, next: NextFunction) {
    try {
      const wallets = req.body;
      const walletsUpdated: any[] = [];
      const walletAddresses = wallets.map((wal: { address: string }) => wal.address);

      const walletsChoose = await walletModel.find({ address: { $in: walletAddresses } });

      for (let i = 0; i < wallets.length; i++) {
        const walletUpdate = await walletModel.updateOne({ address: wallets[i].address }, { new: true });
        walletsUpdated.push(walletUpdate);
      }

      res.status(200).json({ data: walletsUpdated });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
export default walletController;
