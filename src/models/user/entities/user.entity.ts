import { UserInterface } from 'src/common/interfaces/user.interface';
import {
  Column,
  Entity,
  Generated,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ unique: true, length: 30 })
  @Index('username-idx')
  username: string;

  @Column({ unique: true, length: 30 })
  @Index('email-idx')
  email: string;

  @Column()
  password: string;

  @Column()
  @Index('first-name-idx')
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
