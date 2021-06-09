import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { AuthUser } from 'src/common/decorator/auth-user.decorators';

@ApiTags('Profile')
@Controller('api/profile')
@ApiBearerAuth()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createProfileDto: CreateProfileDto, @AuthUser() user) {
    try {
      const data = await this.profileService.create(createProfileDto, user);
      if (data) return data;
      else throw 'error';
    } catch (error) {
      return error;
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @AuthUser() user,
  ) {
    return this.profileService.update(id, updateProfileDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    try {
      const data = await this.profileService.remove(id);
      if (data) return data;
      else throw 'error';
    } catch (error) {
      return error;
    }
  }
}
