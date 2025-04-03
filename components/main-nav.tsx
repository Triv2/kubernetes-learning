import Link from "next/link"
import { Cpu } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/modules" className="flex items-center gap-2">
        <Cpu className="h-6 w-6" />
        <span className="font-bold text-xl hidden md:inline-block">Kubernauts</span>
      </Link>
    </div>
  )
}

