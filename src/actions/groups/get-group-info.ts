'use server'

import { prisma } from '@/lib/prisma'

interface IRequest {
  groupId: string
}

export async function getGroup({ groupId }: IRequest) {
  try {
    const group = await prisma.groups.findUnique({
      where: {
        id: groupId,
      },
      select: {
        id: true,
        name: true,
        players: {
          select: {
            id: true,
            name: true,
            king: true,
            stars: true,
          },
        },
      },
    })

    if (!group) {
      return {
        error: 'Grupo não encontrado',
      }
    }

    return {
      group: {
        id: group.id,
        name: group.name,
        players: group.players,
      },
    }
  } catch {
    return { error: 'Um erro aconteceu ao buscar o grupo' }
  }
}
