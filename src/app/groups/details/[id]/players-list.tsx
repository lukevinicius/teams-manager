import { DeletePlayerButton } from './delete-player'

interface GroupDetailsPageProps {
  players: {
    id: string
    name: string
    king: boolean
    stars: number
  }[]
}

export async function PlayersList({ players }: GroupDetailsPageProps) {
  return (
    <>
      {players.length > 0 ? (
        players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between rounded-md border-[1px] border-dashed border-zinc-600 p-3"
          >
            <p>{player.name}</p>
            <div className="flex items-center space-x-2">
              <DeletePlayerButton playerId={player.id} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <p>Nenhum jogador cadastrado</p>
        </div>
      )}
    </>
  )
}
