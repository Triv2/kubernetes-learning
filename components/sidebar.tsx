"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, BookOpen, Network, Server } from "lucide-react"
import { cn } from "@/data/utils"
import { modules } from "@/lib/modules/unknown/index"

// Map of module slugs to icons
const moduleIcons: Record<string, any> = {
  introduction: BookOpen,
  architecture: Server,
  networking: Network,
  "core-components": Book,
}

export function Sidebar() {
  const pathname = usePathname()

  // Convert modules object to array for rendering
  const modulesList = Object.values(modules)

  return (
    <div className="w-64 border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Learning Modules</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {modulesList.map((module) => {
            const isActive = pathname.includes(`/modules/${module.slug}`)
            const Icon = moduleIcons[module.slug] || Book

            return (
              <li key={module.slug}>
                <Link
                  href={`/modules/${module.slug}`}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{module.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

