'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteGroup(groupId: string) {
  try {
    await prisma.groups.delete({
      where: {
        id: groupId,
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
