"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_model_1 = __importDefault(require("../models/wallet.model"));
const walletController = {
    // Get wallet address
    getWallet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallets = yield wallet_model_1.default.find();
                res.status(200).json({ data: wallets });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    },
    // POST wallet address
    postWallet(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallets = req.body;
                const walletsResponse = [];
                for (let i = 0; i < wallets.length; i++) {
                    const newWallet = new wallet_model_1.default({
                        address: wallets[i].address,
                        private_key: wallets[i].privateKey,
                    });
                    walletsResponse.push(newWallet);
                    yield newWallet.save();
                }
                res.status(201).json({ data: walletsResponse });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    },
    // PUT Update amounts
    updateAmounts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallets = req.body;
                const walletsUpdated = [];
                const walletAddresses = wallets.map((wal) => wal.address);
                const walletsChoose = yield wallet_model_1.default.find({ address: { $in: walletAddresses } });
                for (let i = 0; i < wallets.length; i++) {
                    const walletUpdate = yield wallet_model_1.default.updateOne({ address: wallets[i].address }, { new: true });
                    walletsUpdated.push(walletUpdate);
                }
                res.status(200).json({ data: walletsUpdated });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    },
};
exports.default = walletController;
