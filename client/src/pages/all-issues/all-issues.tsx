import { Fragment } from 'react'
import { Button } from 'antd'
import { groupBy } from 'lodash'
import { useQuery } from 'react-query'
import { HiOutlinePlus } from 'react-icons/hi'

import { IssueStatusEnum } from 'api'
import AppShell from 'components/app-shell'
import customSort from 'utils/custom-sort'

import { fetchIssues } from './queries'
import GroupBar from './components/group-bar'
import TaskBar from './components/task-bar'

export default function AllIssues() {
  const { data } = useQuery('issues', fetchIssues)
  const sortBy = [
    IssueStatusEnum.Inreview,
    IssueStatusEnum.Inprogress,
    IssueStatusEnum.Backlog,
    IssueStatusEnum.Done,
    IssueStatusEnum.Cancelled,
  ]
  const sortedIssues = customSort({ data, sortBy, sortField: 'status' })
  const groupedIssues = groupBy(sortedIssues, 'status')

  return (
    <AppShell>
      <div className="flex items-center px-6 py-3 space-x-4 font-medium border-b border-slate-700">
        <p>All issues</p>
        <Button type="dashed" size="small" icon={<HiOutlinePlus />}>
          Filter
        </Button>
      </div>

      {Object.keys(groupedIssues).map((status) => (
        <Fragment key={status}>
          <GroupBar status={status as IssueStatusEnum} />
          <div className="divide-y divide-slate-800">
            {groupedIssues[status].map((issue) => (
              <TaskBar
                key={issue.id}
                issue={issue}
                status={status as IssueStatusEnum}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </AppShell>
  )
}
