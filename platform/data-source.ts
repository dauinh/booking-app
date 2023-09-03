import 'reflect-metadata';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Host } from './entities/host.entity';
import { Property } from './entities/property.entity';
import { Booking } from './entities/booking.entity';
import { Guest } from './entities/guest.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['./entities/*.ts'],
  migrations: ['./migrations/*.ts'],
  subscribers: []
});

export const hostRepository = AppDataSource.getRepository(Host);
export const guestRepository = AppDataSource.getRepository(Guest);
export const propertyRepository = AppDataSource.getRepository(Property);
export const bookingRepository = AppDataSource.getRepository(Booking);
