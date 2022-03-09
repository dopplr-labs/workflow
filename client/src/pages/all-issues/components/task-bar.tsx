import { useMemo } from 'react'
import dayjs from 'dayjs'
import { Dropdown, Menu } from 'antd'
import { Issue, IssueEstimateEnum, IssueStatusEnum } from 'api'
import { ReactComponent as EstimateIcon } from 'assets/estimate.svg'
import taskStatus from 'constants/issue-status'
import { getIconByStatus } from '../utils'

type TaskBarProps = {
  issue: Issue
  status: IssueStatusEnum
}

export default function TaskBar({ issue, status }: TaskBarProps) {
  const statusOverlay = useMemo(
    () => (
      <Menu selectedKeys={[status]}>
        {Object.keys(taskStatus).map((status) => {
          const { title, icon: Icon } = taskStatus[status as IssueStatusEnum]
          return (
            <Menu.Item
              key={status}
              className="w-40 !p-2"
              icon={<Icon className="w-4 h-4" />}
            >
              {title}
            </Menu.Item>
          )
        })}
      </Menu>
    ),
    [status],
  )

  return (
    <div className="flex items-center px-6 py-3 space-x-2 hover:bg-slate-800/30">
      <Dropdown overlay={statusOverlay} trigger={['click']}>
        <span className="flex items-center cursor-pointer">
          {getIconByStatus(status)}
        </span>
      </Dropdown>

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
