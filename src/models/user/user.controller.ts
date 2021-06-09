import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { AuthUser } from 'src/common/decorator/auth-user.decorators';

@ApiTags('User')
@Controller('api/user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@AuthUser() user, @Param('id') id: string): Promise<User> {
    if (id === 'me') return user;
    const data = await this.userService.findOne(id);
    if (data) return data;
    throw new HttpException('No data', HttpStatus.NO_CONTENT);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateDto).catch((error) => {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
