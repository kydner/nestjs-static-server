import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from './../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../authentication/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/authentication/constants';
import { JwtStrategy } from 'src/authentication/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
