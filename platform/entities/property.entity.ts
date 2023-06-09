import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Host } from './host.entity';
import BaseEntity from './base.entity';

@Entity({ name: 'properties' })
export class Property extends BaseEntity {
  @Column({ type: 'boolean', name: '_active', default: true })
  _active: boolean;

  @ManyToOne(() => Host, (host) => host.properties)
  @JoinColumn({ name: 'host_id' })
  host: Host;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;
}
