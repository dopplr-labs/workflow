import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { IssuesService } from './issues.service'

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
  async addIssue(@Body() createIssueDto: any) {
    const issue = await this.issuesService.addIssue(createIssueDto)
    return issue
  }

  @Delete(':id')
  async deleteIssue(@Param('id') id: string) {
    const issue = await this.issuesService.deleteIssue(id)
    return issue
  }
}
