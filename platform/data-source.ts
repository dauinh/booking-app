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
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Host, Guest, Booking, Property],
  migrations: [],
  subscribers: []
});

export const hostRepository = AppDataSource.getRepository(Host);
export const guestRepository = AppDataSource.getRepository(Guest);
export const propertyRepository = AppDataSource.getRepository(Property);
export const bookingRepository = AppDataSource.getRepository(Booking);
