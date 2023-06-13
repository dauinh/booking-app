import { Entity, Column, ManyToOne } from 'typeorm';
import { Host } from './host.entity';
import { Guest } from './guest.entity';
import BaseEntity from './base.entity';

@Entity({ name: 'bookings' })
export class Booking extends BaseEntity {
  @ManyToOne(() => Host, host => host.bookings)
  host: Host;

  @ManyToOne(() => Guest, guest => guest.bookings)
  guest: Guest;

  @Column({ type: 'timestamptz', name: 'check_in_date' })
  checkInDate: Date;

  @Column({ type: 'timestamptz', name: 'check_out_date' })
  checkOutDate: Date;

  @Column({ type: 'int' })
  totalPrice: number;
}
