'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const FormSchema = z.object({
  name: z.string().min(1, { message: 'Nome do grupo é obrigatório' }),
})

export async function createGroup(formData: FormData) {
  const groupFormData = Object.fromEntries(formData)
  console.log(groupFormData)
  const { data, error, success } = FormSchema.safeParse(groupFormData)

  if (!success) {
    const errors = error.format()

    console.log('Não passou do validador', errors)

    return { formErrors: Object.keys(errors) }
  }

  console.log('Passou do validador')

  try {
    await prisma.groups.create({
      data: {
        name: data.name,
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
