import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { Button, Input } from '@tail-kit/tail-kit'
import Sidebar from 'components/sidebar'

type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex items-center w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        <form
          className="flex w-full py-2 mb-6 border-b"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <Input
            placeholder="Search"
            className="w-full border-none !focus-within:outline-none"
            icon={<HiOutlineSearch />}
          />
          <Button type="submit" buttonType="primary" className="mr-4">
            Create
          </Button>
        </form>
        {children}
      </div>
    </div>
  )
}
