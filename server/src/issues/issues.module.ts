import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { IssuesService } from './issues.service'
import { IssuesController } from './issues.controller'

@Module({
  controllers: [IssuesController],
  providers: [IssuesService, PrismaService],
})
export class IssuesModule {}
