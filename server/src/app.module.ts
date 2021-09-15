import { Module } from '@nestjs/common'
import { IssuesModule } from './issues/issues.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [IssuesModule, AuthModule, UsersModule],
})
export class AppModule {}
