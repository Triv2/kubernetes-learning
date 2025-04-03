import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getModuleData } from "@/lib/modules/unknown/index"
import { ModuleDiagram } from "@/components/module-diagram"
import { ModuleResources } from "@/components/module-resources"

export default function ModulePage({ params }: { params: { slug: string } }) {
  const module = getModuleData(params.slug)

  if (!module) {
    return <div>Module not found</div>
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{module.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{module.description}</p>

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-muted px-4 py-2 rounded-md flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              <span>{module.lessons.length} Lessons</span>
            </div>
            <div className="bg-muted px-4 py-2 rounded-md">{module.level}</div>
          </div>

          <div className="prose max-w-none dark:prose-invert mb-8">
            <h2>What you'll learn</h2>
            <ul>
              {module.learningObjectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <ModuleDiagram moduleSlug={params.slug} />
        </div>
      </div>

      {/* Module Resources Section */}
      {module.resources && <ModuleResources resources={module.resources} />}

      <div className="grid grid-cols-1 gap-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Lessons</h2>
        {module.lessons.map((lesson, index) => (
          <Link key={lesson.slug} href={`/modules/${params.slug}/${lesson.slug}`}>
            <Card className="transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-muted flex items-center justify-center w-8 h-8 rounded-full mr-4">{index + 1}</div>
                  <div>
                    <h3 className="font-semibold">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground">{lesson.duration} min read</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

