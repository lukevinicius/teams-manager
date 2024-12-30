import Link from 'next/link'

export function Header() {
  return (
    <header className="border-[1px solid #D7DDE9] bg-zinc-900 px-4 py-4">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between text-zinc-50">
        <Link href="/" className="text-2xl font-semibold">
          Team Fast
        </Link>
        <p className="{scss.dateText}">
          {new Date().toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </header>
  )
}
