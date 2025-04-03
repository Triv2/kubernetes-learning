"use client"

import { useState } from "react"
import { ExternalLink, BookOpen, Video, Code, FileText, PenToolIcon as Tool, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Resource } from "@/data/types"

// Helper function to get the appropriate icon for a resource type
function getResourceIcon(type: string) {
  switch (type) {
    case "documentation":
      return <BookOpen className="h-4 w-4" />
    case "video":
      return <Video className="h-4 w-4" />
    case "tutorial":
      return <Code className="h-4 w-4" />
    case "article":
      return <FileText className="h-4 w-4" />
    case "tool":
      return <Tool className="h-4 w-4" />
    case "github":
      return <Github className="h-4 w-4" />
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

interface ModuleResourcesProps {
  resources: Resource[]
  showAll?: boolean
}

export function ModuleResources({ resources, showAll = false }: ModuleResourcesProps) {
  const [showAllResources, setShowAllResources] = useState(showAll)
  const displayResources = showAllResources ? resources : resources.slice(0, 6)

  if (resources.length === 0) {
    return null
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Module Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayResources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              {getResourceIcon(resource.type)}
              <span className="font-medium truncate">{resource.title}</span>
              <ExternalLink className="h-4 w-4 flex-shrink-0 ml-auto" />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
            <div className="mt-2 text-xs inline-block px-2 py-1 bg-primary/10 text-primary rounded">
              {resource.type}
            </div>
          </a>
        ))}
      </div>
      {resources.length > 6 && !showAllResources && (
        <div className="mt-4 text-center">
          <Button variant="outline" onClick={() => setShowAllResources(true)}>
            View All Resources
          </Button>
        </div>
      )}
    </div>
  )
}

