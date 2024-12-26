'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deletePlayer(playerId: string) {
  try {
    await prisma.players.delete({
      where: {
        id: playerId,
      },
    })

    revalidatePath('/groups')
  } catch {
    return {
      error: 'Um erro aconteceu ao criar o grupo',
    }
  }

  return {}
}
