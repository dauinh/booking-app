import express, { Express, Request, Response } from 'express';
import { AppDataSource } from '@src/data-source';
import hostRoutes from '@api/profile/host';
import guestRoutes from '@api/profile/guest';

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then( () => {
    console.log("Connected to database!");
}).catch(error => console.log(error));

app.use('/hosts', hostRoutes);
app.use('/guests', guestRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});