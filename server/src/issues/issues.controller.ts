import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { GetUser } from 'src/auth/get-user.decorator'
import { JwtGuard } from 'src/auth/jwt.guard'
import { CreateIssueDto, Issue } from './issues.dto'
import { IssuesService } from './issues.service'

@UseGuards(JwtGuard)
@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Get()
  async getIssues() {
    const issues = await this.issuesService.getIssues()
    return issues
  }

  @Get(':id')
  async getIssue(@Param('id') id: string) {
    const issue = await this.issuesService.getIssue(id)
    return issue
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: Issue,
    description: 'Creates a new issue in DB and returns issue object',
  })
  async addIssue(
    @Body() createIssueDto: CreateIssueDto,
    @GetUser() user: User,
  ) {
    const issue = await this.issuesService.addIssue(createIssueDto, user)
    return issue
  }

  @Delete(':id')
  async deleteIssue(@Param('id') id: string) {
    const issue = await this.issuesService.deleteIssue(id)
    return issue
  }
}
