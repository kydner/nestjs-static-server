import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { TokenPayload } from './../auth/token-payload.interface';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private repository: Repository<Profile>,
  ) {}

  async create(createDto: CreateProfileDto, user: TokenPayload) {
    const createdBy = user.username;
    await this.repository.save({ ...createDto, createdBy });
    return createDto;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async update(id: string, updateDto: UpdateProfileDto, user: TokenPayload) {
    const updatedBy = user.username;
    const data = await this.repository.findOne(id);
    const updated = { ...data, ...updateDto, updatedBy };
    return await this.repository.save(updated);
  }

  async remove(id: string) {
    await this.repository.delete(id);
  }
}
