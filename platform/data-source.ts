import 'reflect-metadata'
import dotenv from 'dotenv';
import { DataSource } from 'typeorm'
import { Host } from './entity/Host'
import { Property } from './entity/Property';
import { Booking } from './entity/Booking';
import { Guest } from './entity/Guest';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Host, Guest, Booking, Property],
    migrations: [],
    subscribers: [],
})
