import { CreateGroupForm } from '@/app/groups/create-group-form'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { GroupsList } from '@/app/groups/groups-list'

export default async function GroupsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center text-zinc-200">
        <p className="text-2xl font-semibold">Team Fast</p>

        <CreateGroupForm />
        <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
          <GroupsList />
        </Suspense>
      </div>
    </div>
  )
}
