'use client'

import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Users } from 'lucide-react'
import { createGroup } from '@/actions/groups/create-group'
import { useToast } from '@/hooks/use-toast'

export function CreateGroupForm() {
  const [fieldErrors, setFieldErrors] = useState<string[]>([])
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  async function handleCreateGroup(formData: FormData) {
    await setFieldErrors([])
    startTransition(async () => {
      const { error, formErrors } = await createGroup(formData)

      if (formErrors) {
        setFieldErrors(formErrors)
      }

      if (error) {
        toast({
          title: 'Erro ao criar grupo',
          description: error,
          variant: 'destructive',
        })
      }
    })
  }

  return (
    <form action={handleCreateGroup} className="flex space-x-2">
      <div className="space-y-1">
        <Input
          placeholder="Nome do grupo"
          name="name"
          className="text-zinc-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        {fieldErrors.includes('name') && (
          <p className="text-left text-xs text-red-600">
            Nome do grupo é obrigatório
          </p>
        )}
      </div>
      <Button className="bg-emerald-600 hover:bg-emerald-600/80">
        {isPending ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <>
            <Users className="h-6 w-6 cursor-pointer" /> Adicionar grupo
          </>
        )}
      </Button>
    </form>
  )
}
