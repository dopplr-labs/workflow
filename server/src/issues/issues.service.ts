import { HttpException, Injectable } from '@nestjs/common'
import { Issue as IssueModel, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateIssueDto } from './issues.dto'

@Injectable()
export class IssuesService {
  constructor(private prismaService: PrismaService) {}

  getIssues(): Promise<IssueModel[]> {
    return this.prismaService.issue.findMany()
  }

  async getIssue(id: string): Promise<IssueModel> {
    const issue = await this.prismaService.issue.findUnique({ where: { id } })
    if (!issue) {
      throw new HttpException('Issue not found', 404)
    }
    return issue
  }

  async addIssue(issue: CreateIssueDto, user: User): Promise<IssueModel> {
    const newIssue = await this.prismaService.issue.create({
      data: { ...issue, user: { connect: { id: user.id } } },
    })
    return newIssue
  }

  async deleteIssue(id: string): Promise<IssueModel> {
    const deletedIssue = await this.prismaService.issue.delete({
      where: { id },
    })
    return deletedIssue
  }
}
