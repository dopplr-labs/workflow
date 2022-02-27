import type { ReactNode } from 'react'
import Sidebar from 'components/sidebar'

type AppShellProps = {
  children?: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex w-screen h-screen bg-slate-900">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
