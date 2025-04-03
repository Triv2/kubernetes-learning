import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { modules } from "@/lib/modules/unknown/index"

export default function ModulesPage() {
  // Convert modules object to array for rendering
  const modulesList = Object.values(modules)

  return (
    <div className="container mx-auto py-8 px-4 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Modules</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Select a module to start learning Kubernetes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulesList.map((module) => (
          <Link key={module.slug} href={`/modules/${module.slug}`}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{module.title}</CardTitle>
                  <Badge
                    variant={
                      module.level === "beginner"
                        ? "default"
                        : module.level === "intermediate"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {module.level}
                  </Badge>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{module.lessons.length} lessons</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

