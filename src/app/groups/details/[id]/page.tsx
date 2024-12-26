import { getGroup } from '@/actions/groups/get-group-info'
import { CreatePlayerForm } from './create-player'
import { PlayersList } from './players-list'

interface GroupDetailsPageProps {
  params: Promise<{ id: string }>
}

export default async function GroupDetailsPage({
  params,
}: GroupDetailsPageProps) {
  const groupId = (await params).id
  const { group, error } = await getGroup({ groupId })

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center text-zinc-200">
        <p className="text-2xl font-semibold">Team Fast</p>
        {error && (
          <>
            <p>{error}</p>
          </>
        )}
        {group && (
          <>
            <div className="rounded-md bg-zinc-900 p-4">
              <div className="space-y-3">
                <p className="text-lg font-semibold text-zinc-300">
                  {group.name}
                </p>
                <PlayersList players={group.players} />
              </div>
            </div>
            <CreatePlayerForm groupId={group.id} />
          </>
        )}
      </div>
    </div>
  )
}
