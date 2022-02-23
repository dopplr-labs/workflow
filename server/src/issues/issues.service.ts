import { HttpException, Injectable } from '@nestjs/common'
import { Issue as IssueModel, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateIssueDto } from './issues.dto'

@Injectable()
export class IssuesService {
  constructor(private prismaService: PrismaService) {}

  getIssues(user: User): Promise<IssueModel[]> {
    return this.prismaService.issue.findMany({
      where: { user: { id: user.id } },
      orderBy: { createdAt: 'desc' },
    })
  }

  async getIssue(id: string, user: User): Promise<IssueModel> {
    const issue = await this.prismaService.issue.findUnique({
      where: { id },
      include: { user: true },
    })

    if (!issue) {
      throw new HttpException('Issue not found', 404)
    }

    if (issue.user.id !== user.id) {
      throw new HttpException('Not authorized to access', 403)
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
