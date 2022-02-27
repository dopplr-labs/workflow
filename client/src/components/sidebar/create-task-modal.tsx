import { useMemo, useState } from 'react'
import { Button, Modal, Switch } from 'antd'
import { useMutation, useQueryClient } from 'react-query'
import { HiOutlinePaperClip, HiOutlineX } from 'react-icons/hi'
import { createIssue } from 'queries/issues'

type CreateTaskModalProps = {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}

export default function CreateTaskModal({
  isVisible,
  setIsVisible,
}: CreateTaskModalProps) {
  const [title, setTitle] = useState('')
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(createIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries('issues')
      setIsVisible(false)
      setTitle('')
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
          onClick={() => mutate({ title })}
        >
          Save Issue
        </Button>
      </div>
    ),
    [isLoading, mutate, title],
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
        className="w-full bg-slate-800 focus:outline-none"
        placeholder="Add description..."
      />
    </Modal>
  )
}
