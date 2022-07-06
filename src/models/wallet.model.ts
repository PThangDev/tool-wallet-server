import mongoose from 'mongoose';
import { Wallet } from '../interface/Wallet';

const walletSchema = new mongoose.Schema<Wallet>(
  {
    address: { type: String, required: true, trim: true, unique: true },
    private_key: { type: String, required: true, trim: true, unique: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<Wallet>('wallet', walletSchema);
