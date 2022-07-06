"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const walletSchema = new mongoose_1.default.Schema({
    address: { type: String, required: true, trim: true, unique: true },
    private_key: { type: String, required: true, trim: true, unique: true },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('wallet', walletSchema);