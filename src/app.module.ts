import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),

    TypeOrmModule.forRoot(ormconfig),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views/client'),
    }),

    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  private configService: ConfigService;
}
