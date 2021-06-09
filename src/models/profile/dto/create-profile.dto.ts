import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ProfileInterface } from 'src/common/interfaces/profile.interface';

export class CreateProfileDto implements ProfileInterface {
  @IsUUID('all')
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all')
  pictureId: string;

  @ApiProperty({ default: false })
  default: boolean;
}
