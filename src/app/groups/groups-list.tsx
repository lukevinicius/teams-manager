import { fetchGroups } from '@/actions/groups/fetch-groups'
import { DeleteGroupButton } from './delete-group-button'
import Link from 'next/link'

export async function GroupsList() {
  const groups = await fetchGroups()

  return (
    <div className="rounded-md bg-zinc-900 p-4">
      <div className="space-y-2">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group.id}
              className="flex items-center justify-between rounded-md border-[1px] border-dashed border-zinc-600 p-3"
            >
              <Link
                href={`/groups/details/${group.id}`}
                key={group.id}
                className="flex items-center justify-between hover:opacity-80"
              >
                <p>{group.name}</p>
              </Link>
              <div className="flex items-center space-x-2">
                <DeleteGroupButton groupId={group.id} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <p>Nenhum grupo cadastrado</p>
          </div>
        )}
      </div>
    </div>
  )
}
