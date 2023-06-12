import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'guests' })
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', name: '_id' })
  _id: number;

  @Column({ type: 'boolean', name: '_active', default: true })
  _active: boolean;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}