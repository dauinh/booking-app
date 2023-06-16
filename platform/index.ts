import express, { Express } from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import hostRoutes from './controllers/hosts';
import authRoutes from './controllers/auth';

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then( () => {
    console.log("Connected to database!");
}).catch(error => console.log(error));

// Enable CORS for all routes
app.use(cors());
app.use('/hosts', hostRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});