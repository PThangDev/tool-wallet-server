"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wallet_controller_1 = __importDefault(require("../controllers/wallet.controller"));
const router = express_1.default.Router();
router.get('/wallets', wallet_controller_1.default.getWallet);
router.post('/wallets', wallet_controller_1.default.postWallet);
router.put('/wallets', wallet_controller_1.default.updateAmounts);
exports.default = router;
