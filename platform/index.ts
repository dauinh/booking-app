import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { AppDataSource } from './data-source';
import authRoutes from './controllers/auth';
import hostRoutes from './controllers/host';
import guestRoutes from './controllers/guest';
import { validateHost } from './middlewares/validate';

dotenv.config();

export const SECRET_KEY = process.env.SECRET_KEY || 'secret-key';

const app: Express = express();
const port = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => console.log(error));

// Parse JSON objects in requests
app.use(express.json());

// Enable CORS for frontend routes
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// Configure cookie session middleware
app.use(cookieParser());

app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/host', validateHost, hostRoutes);
app.use('/guest', guestRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
