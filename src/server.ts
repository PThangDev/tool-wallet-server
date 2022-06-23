import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import connectDB from './configs/database';
import logger from './helpers/logger';

const app = express();
const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json('Hello Express!');
});

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  logger.info(`App listen on PORT : ${PORT}`);
});
