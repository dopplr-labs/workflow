import { useMemo } from 'react'
import { IssueStatusEnum } from 'api'
import { getIconByStatus } from '../utils'

type GroupBarProps = {
  status: IssueStatusEnum
}

export default function GroupBar({ status }: GroupBarProps) {
  const statusIconAndText = useMemo(() => {
    switch (status) {
      case IssueStatusEnum.Backlog:
        return 'Backlog'
      case IssueStatusEnum.Inprogress:
        return 'In Progress'
      case IssueStatusEnum.Inreview:
        return 'In Review'
      case IssueStatusEnum.Done:
        return 'Done'
      case IssueStatusEnum.Cancelled:
        return 'Cancelled'
    }
  }, [status])

  return (
    <div className="flex items-center px-6 py-2 space-x-2 bg-slate-800">
      {getIconByStatus(status)}
      <span>{statusIconAndText}</span>
    </div>
  )
}
