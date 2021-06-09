import { ProfileInterface } from 'src/common/interfaces/profile.interface';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('profiles')
export class Profile implements ProfileInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  name: string;

  @Column()
  pictureId: string;

  @Column()
  default: boolean;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdOn = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedOn = new Date();
  }
}
