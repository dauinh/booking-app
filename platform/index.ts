import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AppDataSource } from './data-source';
import hostRoutes from './controllers/hosts';
import authRoutes from './controllers/auth';

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then( () => {
    console.log("Connected to database!");
}).catch(error => console.log(error));

// Parse JSON objects in requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Configure cookie session middleware
app.use(cookieParser());

app.use('/host', hostRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});