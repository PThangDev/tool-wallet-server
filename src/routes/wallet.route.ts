import express from 'express';
import walletController from '../controllers/wallet.controller';

const router = express.Router();

router.get('/wallets', walletController.getWallet);

router.post('/wallets', walletController.postWallet);

router.put('/wallets', walletController.updateAmounts);

export default router;
