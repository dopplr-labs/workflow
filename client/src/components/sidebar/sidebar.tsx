import { useState } from 'react'
import clsx from 'clsx'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { HiOutlinePencilAlt, HiOutlineServer } from 'react-icons/hi'
import { ReactComponent as Logo } from 'assets/logo.svg'
import CreateTaskModal from './create-task-modal'

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

      <CreateTaskModal
        isVisible={taskModalVisible}
        setIsVisible={setTaskModalVisible}
      />
    </div>
  )
}
