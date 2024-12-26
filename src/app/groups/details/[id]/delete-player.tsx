'use client'

import { deletePlayer } from '@/actions/players/delete-player'
import { Button } from '@/components/ui/button'
import { Loader2, Trash } from 'lucide-react'
import { useTransition } from 'react'

interface DeleteGroupButtonProps {
  playerId: string
}

export function DeletePlayerButton({ playerId }: DeleteGroupButtonProps) {
  const [isPending, startTransition] = useTransition()

  function handleDeleteWallet() {
    startTransition(async () => {
      await deletePlayer(playerId)
    })
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleDeleteWallet}
      variant="destructive"
      size="sm"
    >
      {isPending ? (
        <Loader2 className="h-6 w-6 animate-spin" />
      ) : (
        <Trash className="h-6 w-6 cursor-pointer" />
      )}
    </Button>
  )
}
