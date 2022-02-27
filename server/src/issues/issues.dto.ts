import { ApiProperty } from '@nestjs/swagger'
import { IssueEstimate, IssuePriority, IssueStatus } from '@prisma/client'

export class CreateIssueDto {
  title: string
  description?: string

  @ApiProperty({ enum: IssueStatus })
  status?: IssueStatus

  @ApiProperty({ enum: IssuePriority })
  priority?: IssuePriority

  @ApiProperty({ enum: IssueEstimate })
  estimate?: IssueEstimate
}

export class Issue {
  id: string
  title: string
  description: string | null
  createdAt: Date
  updatedAt: Date

  @ApiProperty({ enum: IssueStatus })
  status: IssueStatus

  @ApiProperty({ enum: IssuePriority })
  priority: IssuePriority

  @ApiProperty({ enum: IssueEstimate })
  estimate: IssueEstimate

  createdBy: string
}
