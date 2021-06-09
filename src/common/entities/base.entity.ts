import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
