import { IssueStatusEnum } from 'api'
import { ReactComponent as BacklogIcon } from 'assets/backlog.svg'
import { ReactComponent as CancelledIcon } from 'assets/cancelled.svg'
import { ReactComponent as DoneIcon } from 'assets/done.svg'
import { ReactComponent as ProgressIcon } from 'assets/progress.svg'
import { ReactComponent as ReviewIcon } from 'assets/review.svg'
import { ReactComponent as TodoIcon } from 'assets/todo.svg'

export function getIconByStatus(status: IssueStatusEnum) {
  switch (status) {
    case IssueStatusEnum.Todo:
      return <TodoIcon />
    case IssueStatusEnum.Backlog:
      return <BacklogIcon />
    case IssueStatusEnum.Inprogress:
      return <ProgressIcon />
    case IssueStatusEnum.Inreview:
      return <ReviewIcon />
    case IssueStatusEnum.Done:
      return <DoneIcon />
    case IssueStatusEnum.Cancelled:
      return <CancelledIcon />
  }
}
