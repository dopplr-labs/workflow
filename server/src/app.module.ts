import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { IssuesModule } from './issues/issues.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // load environment variables from .env file
    AuthModule,
    IssuesModule,
    UsersModule,
  ],
})
export class AppModule {}
