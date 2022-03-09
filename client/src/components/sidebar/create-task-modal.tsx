import { useMemo, useState } from 'react'
import { Button, Modal, Select, Switch } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import { HiOutlinePaperClip, HiOutlineX } from 'react-icons/hi'
import { createIssue } from 'queries/issues'
import { CreateIssueDtoStatusEnum, IssueStatusEnum } from 'api'
import taskStatus from '../../constants/issue-status'

type CreateTaskModalProps = {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}

const initialTaskState = {
  title: '',
  status: CreateIssueDtoStatusEnum.Backlog,
}

export default function CreateTaskModal({
  isVisible,
  setIsVisible,
}: CreateTaskModalProps) {
  const [{ title, status }, setTask] = useState(initialTaskState)

  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(createIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries('issues')
      setIsVisible(false)
      setTask(initialTaskState)
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
        onChange={({ target: { value } }) =>
          setTask((prevState) => ({ ...prevState, title: value }))
        }
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
          onChange={(value) =>
            setTask((prevState) => ({ ...prevState, status: value }))
          }
          dropdownMatchSelectWidth={180}
          className="rounded-md bg-slate-700/80"
        >
          {Object.keys(taskStatus).map((status) => {
            const { title, icon: Icon } = taskStatus[status as IssueStatusEnum]
            return (
              <Select.Option key={status}>
                <div className="flex items-center h-full space-x-2">
                  <Icon />
                  <span>{title}</span>
                </div>
              </Select.Option>
            )
          })}
        </Select>
      </div>
    </Modal>
  )
}
