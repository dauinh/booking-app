import express, { Express, Request, Response } from 'express';
import { AppDataSource } from './data-source'
import hostRoutes from './routes/hostRoutes'

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then( () => {
    console.log("Connected to database!");
}).catch(error => console.log(error));

app.use('/hosts', hostRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});