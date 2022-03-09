import { IssueStatusEnum } from 'api'
import { ReactComponent as BacklogIcon } from 'assets/backlog.svg'
import { ReactComponent as CancelledIcon } from 'assets/cancelled.svg'
import { ReactComponent as DoneIcon } from 'assets/done.svg'
import { ReactComponent as ProgressIcon } from 'assets/progress.svg'
import { ReactComponent as ReviewIcon } from 'assets/review.svg'
import { ReactComponent as TodoIcon } from 'assets/todo.svg'

const taskStatus = {
  [IssueStatusEnum.Backlog]: {
    title: 'Backlog',
    icon: BacklogIcon,
  },
  [IssueStatusEnum.Todo]: {
    title: 'Todo',
    icon: TodoIcon,
  },
  [IssueStatusEnum.Inprogress]: {
    title: 'In Progress',
    icon: ProgressIcon,
  },
  [IssueStatusEnum.Inreview]: {
    title: 'In Review',
    icon: ReviewIcon,
  },
  [IssueStatusEnum.Done]: {
    title: 'Done',
    icon: DoneIcon,
  },
  [IssueStatusEnum.Cancelled]: {
    title: 'Cancelled',
    icon: CancelledIcon,
  },
}

export default taskStatus
