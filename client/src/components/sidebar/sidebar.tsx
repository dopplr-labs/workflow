import { useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { Button, Modal, Switch } from 'antd'
import {
  HiOutlinePaperClip,
  HiOutlinePencilAlt,
  HiOutlineServer,
  HiOutlineX,
} from 'react-icons/hi'
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Sidebar() {
  const [taskModalVisible, setTaskModalVisible] = useState(false)

  return (
    <div className="flex-none w-64 p-4 border-r border-slate-700">
      <div className="flex items-center pr-4 mb-4">
        <Logo className="w-6 h-6 mr-3" />
        <p className="flex-1 font-mono font-semibold">Workflow</p>
      </div>

      <Button
        block
        size="small"
        type="primary"
        className="mb-4"
        icon={<HiOutlinePencilAlt />}
        onClick={() => setTaskModalVisible(true)}
      >
        New Issue
      </Button>

      <NavLink
        to="/all-issues"
        className={({ isActive }) =>
          clsx(
            'flex items-center w-full px-4 py-1 text-sm rounded-lg text-slate-400',
            { 'bg-slate-700': isActive },
          )
        }
      >
        <HiOutlineServer className="w-4 h-4" />
        <span className="ml-2">Issues</span>
      </NavLink>

      <Modal
        visible={taskModalVisible}
        closeIcon={<HiOutlineX />}
        onOk={() => setTaskModalVisible(true)}
        onCancel={() => setTaskModalVisible(false)}
        footer={
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center p-2 rounded text-slate-100 hover:bg-slate-700 hover:text-white">
              <HiOutlinePaperClip className="mx-0" />
            </button>
            <div className="flex-1" />
            <label className="flex items-center space-x-2 text-xs">
              <Switch size="small" />
              <span>Create more</span>
            </label>
            <Button type="primary" size="small">
              Save Issue
            </Button>
          </div>
        }
      >
        <p className="mb-2 text-sm text-slate-300">Create New Issue</p>
        <input
          className="w-full mb-3 text-lg font-medium bg-slate-800 focus:outline-none"
          placeholder="Issue title"
        />
        <input
          className="w-full bg-slate-800 focus:outline-none"
          placeholder="Add description..."
        />
      </Modal>
    </div>
  )
}
