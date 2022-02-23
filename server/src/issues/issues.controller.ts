import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger'
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
  @ApiOkResponse({
    type: Issue,
    isArray: true,
    description: 'Fetch all issues for a user',
  })
  async getIssues(@GetUser() user: User) {
    const issues = await this.issuesService.getIssues(user)
    return issues
  }

  @Get(':id')
  @ApiOkResponse({ type: Issue, description: 'Fetch issue by id' })
  async getIssue(@Param('id') id: string, @GetUser() user: User) {
    const issue = await this.issuesService.getIssue(id, user)
    return issue
  }

  @Post()
  @ApiCreatedResponse({
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
