import React from 'react'
import AppShell from 'components/app-shell'
import { Button } from '@tail-kit/tail-kit'
import { HiBell, HiPencil } from 'react-icons/hi'

export default function AllIssues() {
  return (
    <AppShell>
      <div className="flex flex-1 h-full divide-x">
        <div className="flex-1 px-8">
          <div className="flex items-center pb-4 space-x-4 border-b">
            <div>
              <p className="text-xl font-bold">ARIA attribute misspelled</p>
              <p className="text-sm text-gray-500">
                #400 opened by{' '}
                <b className="font-medium text-gray-700">Thomas Andersson</b> in{' '}
                <b className="font-medium text-gray-700">Customer Portal</b>
              </p>
            </div>
            <div className="flex-1" />
            <Button icon={<HiPencil />}>Edit</Button>
            <Button icon={<HiBell />}>Subscribe</Button>
          </div>

          <div className="py-4 space-y-4 font-medium text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              hic? Commodi cumque similique id tempora molestiae deserunt at
              suscipit, dolor voluptatem, numquam, harum consequatur laboriosam
              voluptas tempore aut voluptatem alias?
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget
                massa parturient vulputate fermentum id facilisis nam pharetra.
                Aliquet leo tellus.
              </li>
              <li>
                Turpis ac nunc adipiscing metus tincidunt senectus tellus.
              </li>
              <li>
                Semper interdum porta sit tincidunt. Dui suspendisse scelerisque
                amet metus eget sed. Ut tellus in sed dignissim.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/3" />
      </div>
    </AppShell>
  )
}
