import { Button } from '@/components/ui/button'

import { CreateGroupForm } from '@/app/groups/create-group-form'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default async function GroupsList() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center text-zinc-200">
        <p className="text-2xl font-semibold">Team Fast</p>

        <CreateGroupForm />
        <Suspense fallback={<Skeleton className="h-4 w-[200px]" />}>
          <GroupsList />
        </Suspense>
        <Button className="w-full bg-emerald-600 hover:bg-emerald-600/80">
          Sortear times
        </Button>
      </div>
    </div>
  )
}
