import { useMemo, useState } from 'react'
import { Button, Modal, Select, Switch } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import { HiOutlinePaperClip, HiOutlineX } from 'react-icons/hi'
import { createIssue } from 'queries/issues'
import { CreateIssueDtoStatusEnum, IssueStatusEnum } from 'api'
import { ReactComponent as BacklogIcon } from 'assets/backlog.svg'
import { ReactComponent as CancelledIcon } from 'assets/cancelled.svg'
import { ReactComponent as DoneIcon } from 'assets/done.svg'
import { ReactComponent as ProgressIcon } from 'assets/progress.svg'
import { ReactComponent as ReviewIcon } from 'assets/review.svg'
import { ReactComponent as TodoIcon } from 'assets/todo.svg'

type CreateTaskModalProps = {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}

export default function CreateTaskModal({
  isVisible,
  setIsVisible,
}: CreateTaskModalProps) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(CreateIssueDtoStatusEnum.Backlog)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(createIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries('issues')
      setIsVisible(false)
      setTitle('')
      setStatus(CreateIssueDtoStatusEnum.Backlog)
    },
  })

  const footer = useMemo(
    () => (
      <div className="flex items-center space-x-4">
        <button className="flex items-center justify-center p-2 rounded text-slate-100 hover:bg-slate-700 hover:text-white">
          <HiOutlinePaperClip className="mx-0" />
        </button>
        <div className="flex-1" />
        <label className="flex items-center space-x-2 text-xs">
          <Switch size="small" />
          <span>Create more</span>
        </label>
        <Button
          type="primary"
          size="small"
          loading={isLoading}
          onClick={() => mutate({ title, status })}
        >
          Save Issue
        </Button>
      </div>
    ),
    [isLoading, mutate, title, status],
  )

  return (
    <Modal
      width={640}
      visible={isVisible}
      closeIcon={<HiOutlineX />}
      onOk={() => setIsVisible(true)}
      onCancel={() => setIsVisible(false)}
      footer={footer}
    >
      <p className="mb-2 text-slate-300">Create New Issue</p>
      <input
        value={title}
        placeholder="Issue title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 text-base bg-slate-800 focus:outline-none"
      />
      <input
        className="w-full mb-3 bg-slate-800 focus:outline-none"
        placeholder="Add description..."
      />
      <div className="flex items-center space-x-4">
        <Select
          size="small"
          value={status}
          bordered={false}
          showArrow={false}
          onChange={setStatus}
          dropdownMatchSelectWidth={180}
          className="rounded-md bg-slate-700/80"
        >
          <Select.Option value={IssueStatusEnum.Backlog}>
            <div className="flex items-center space-x-2">
              <BacklogIcon />
              <span>Backlog</span>
            </div>
          </Select.Option>

          <Select.Option value={IssueStatusEnum.Todo}>
            <div className="flex items-center space-x-2">
              <TodoIcon />
              <span>Todo</span>
            </div>
          </Select.Option>

          <Select.Option value={IssueStatusEnum.Inprogress}>
            <div className="flex items-center space-x-2">
              <ProgressIcon />
              <span>In Progress</span>
            </div>
          </Select.Option>

          <Select.Option value={IssueStatusEnum.Inreview}>
            <div className="flex items-center space-x-2">
              <ReviewIcon />
              <span>In Review</span>
            </div>
          </Select.Option>

          <Select.Option value={IssueStatusEnum.Done}>
            <div className="flex items-center space-x-2">
              <DoneIcon />
              <span>Done</span>
            </div>
          </Select.Option>

          <Select.Option value={IssueStatusEnum.Cancelled}>
            <div className="flex items-center space-x-2">
              <CancelledIcon />
              <span>Cancelled</span>
            </div>
          </Select.Option>
        </Select>
      </div>
    </Modal>
  )
}
