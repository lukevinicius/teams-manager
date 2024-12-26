'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const FormSchema = z.object({
  groupId: z.string(),
  name: z.string().min(1, { message: 'Nome do grupo é obrigatório' }),
})

export async function addPlayer(formData: FormData) {
  const playerFormData = Object.fromEntries(formData)
  const { data, error, success } = FormSchema.safeParse(playerFormData)

  if (!success) {
    const errors = error.format()

    return { formErrors: Object.keys(errors) }
  }

  try {
    await prisma.players.create({
      data: {
        name: data.name,
        stars: 0,
        king: false,
        groupId: data.groupId,
      },
    })

    revalidatePath('/players/details')
  } catch {
    return {
      error: 'Um erro aconteceu ao criar o grupo',
    }
  }

  return {}
}
