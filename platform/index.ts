import express, { Express, Request, Response } from 'express';
import { AppDataSource } from './data-source'
import { Host } from './entity/hosts'

const app: Express = express();
const port = 3000;

AppDataSource.initialize().then(async () => {

    console.log("Loading hosts from the database...");
    const hosts = await AppDataSource.manager.find(Host);
    console.log("Loaded hosts: ", hosts);

}).catch(error => console.log(error))

// TODO: connect to database (TypeORM)
// seperate routes into a different file
// example: login/login-routes.js
app.get('/', (req, res) => {
    // sending to frontend
    // send block of data using res.json()
    // res.json({id: 0, name: "linh"})
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});