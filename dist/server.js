"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./configs/database"));
const logger_1 = __importDefault(require("./helpers/logger"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
//Connect Database
(0, database_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).json('Hello Express!');
});
// Routes
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    logger_1.default.info(`App listen on PORT : ${PORT}`);
});
