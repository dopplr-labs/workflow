import React from 'react'
import {
  HiOutlineArchive,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineUserCircle,
} from 'react-icons/hi'

const tabs = [
  { label: 'All Issues', icon: HiOutlineHome },
  { label: 'My Issues', icon: HiOutlineMenu },
  { label: 'Assigned', icon: HiOutlineUserCircle },
  { label: 'Closed', icon: HiOutlineArchive },
  { label: 'Recent', icon: HiOutlineClock },
]

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 2xl:w-80">
      <div className="flex items-center p-3 space-x-3 bg-gray-900">
        <HiOutlineBriefcase className="w-8 h-8 text-red-500" />
        <p className="text-lg font-semibold tracking-wider text-white">
          workflow
        </p>
      </div>
      <ul className="py-3">
        {tabs.map((tab, index) => {
          const { icon: Icon } = tab
          return (
            <li
              key={index}
              className="flex items-center p-3 space-x-3 text-gray-400 rounded cursor-pointer hover:bg-gray-900 hover:text-white"
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{tab.label}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
