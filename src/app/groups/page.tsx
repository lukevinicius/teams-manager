import { CreateGroupForm } from '@/app/groups/create-group-form'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { GroupsList } from '@/app/groups/groups-list'

export default async function GroupsPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="space-y-4 text-center text-zinc-200">
        <Suspense fallback={<Skeleton className="h-4 w-full" />}>
          <GroupsList />
        </Suspense>
        <CreateGroupForm />
      </div>
    </div>
  )
}
