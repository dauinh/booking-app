import { Entity, Column, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
import BaseEntity from './base.entity';

@Entity({ name: 'guests' })
export class Guest extends BaseEntity {
  @Column({ type: 'boolean', name: '_active', default: true })
  _active: boolean;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @OneToMany(() => Booking, booking => booking.guest)
  bookings: Booking[];

  @Column({ type: 'varchar', length: 255, default: 'password' })
  password: string;
}