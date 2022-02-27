import dayjs from 'dayjs'
import { Issue, IssueEstimateEnum, IssueStatusEnum } from 'api'
import { ReactComponent as EstimateIcon } from 'assets/estimate.svg'
import { getIconByStatus } from '../utils'

type TaskBarProps = {
  issue: Issue
  status: IssueStatusEnum
}

export default function TaskBar({ issue, status }: TaskBarProps) {
  return (
    <div className="flex items-center px-6 py-3 space-x-2 hover:bg-slate-800/30">
      {getIconByStatus(status)}
      <p className="flex-1 font-medium">{issue.title}</p>

      {issue.estimate !== IssueEstimateEnum.None ? (
        <div className="flex items-center text-xs text-slate-400 hover:text-white">
          <EstimateIcon />
          <span>{issue.estimate}</span>
        </div>
      ) : null}

      <span className="text-xs text-slate-400">
        {dayjs(issue.createdAt).format('MMM DD')}
      </span>
    </div>
  )
}
