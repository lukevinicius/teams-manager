import { fetchGroups } from '@/actions/groups/fetch-groups'
import { Crown } from 'lucide-react'

export async function GroupsList() {
  const groups = await fetchGroups()

  return (
    <div className="rounded-md bg-zinc-900 p-4">
      <div className="space-y-2">
        {groups.map((group) => (
          <div key={group.id} className="flex items-center justify-between">
            <p>{group.name}</p>
            <div className="flex items-center space-x-2">
              <Crown />
              {/* <DeletePlayer /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
