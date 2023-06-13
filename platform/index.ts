import express, { Express } from 'express';
import { AppDataSource } from '@src/data-source';
import hostRoutes from '@src/controllers/hosts';
import authRoutes from '@src/controllers/auth';

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then( () => {
    console.log("Connected to database!");
}).catch(error => console.log(error));

app.use('/hosts', hostRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});