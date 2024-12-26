'use client'

import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, User } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { addPlayer } from '@/actions/players/add-player'

interface CreatePlayerFormProps {
  groupId: string
}

export function CreatePlayerForm({ groupId }: CreatePlayerFormProps) {
  const [fieldErrors, setFieldErrors] = useState<string[]>([])
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  async function handleCreateGroup(formData: FormData) {
    await setFieldErrors([])
    startTransition(async () => {
      formData.append('groupId', groupId)
      const { error, formErrors } = await addPlayer(formData)

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
          placeholder="Nome do jogador"
          name="name"
          className="text-zinc-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        {fieldErrors.includes('name') && (
          <p className="text-left text-xs text-red-600">
            Nome do jogador é obrigatório
          </p>
        )}
      </div>
      <Button>
        {isPending ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <>
            <User className="h-6 w-6 cursor-pointer" /> Adicionar jogador
          </>
        )}
      </Button>
    </form>
  )
}
