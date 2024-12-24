'use server'

import { prisma } from '@/lib/prisma'

export async function fetchGroups() {
  const groups = await prisma.groups.findMany()

  return groups
}
