import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Host } from './Host';
import { Guest } from './Guest';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', name: '_id' })
  _id: number;

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

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
