import { Entity, Column, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
import { Property } from './property.entity';
import BaseEntity from './base.entity';

@Entity({ name: 'hosts' })
export class Host extends BaseEntity {
  @Column({ type: 'boolean', name: '_active', default: true })
  _active: boolean;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @OneToMany(() => Booking, booking => booking.host)
  bookings: Booking[];

  @OneToMany(() => Property, property => property.host)
  properties: Property[];

  @Column({ type: 'varchar', length: 255, default: 'password' })
  password: string;
}