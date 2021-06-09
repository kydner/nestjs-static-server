import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  async create(createDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createDto.password, 10);
    const data = this.repository.create({
      ...createDto,
      password: hashPassword,
    });
    await this.repository.save(data);
    return data;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async findUser(username: string): Promise<User> {
    return await this.repository.findOne({
      where: { username },
    });
  }

  async update(id: string, updateDto: UpdateUserDto): Promise<any> {
    const data = await this.repository.findOne(id);
    const updated = { ...data, ...updateDto };
    return await this.repository.save(updated);
  }

  async remove(id: string): Promise<any> {
    await this.repository.delete(id);
  }
}
