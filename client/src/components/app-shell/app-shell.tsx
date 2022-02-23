import Sidebar from 'components/sidebar'

export default function AppShell() {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-900">
      <Sidebar />
    </div>
  )
}
