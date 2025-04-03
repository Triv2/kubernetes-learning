import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Video, Code, FileText, PenToolIcon as Tool, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getLessonData, getModuleData } from "@/lib/modules/unknown/index"
import { LessonDiagram } from "@/components/lesson-diagram"

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

export default function LessonPage({
  params,
}: {
  params: { slug: string; lessonSlug: string }
}) {
  const module = getModuleData(params.slug)
  const lesson = getLessonData(params.slug, params.lessonSlug)

  if (!module || !lesson) {
    return <div>Lesson not found</div>
  }

  const currentLessonIndex = module.lessons.findIndex((l) => l.slug === params.lessonSlug)
  const nextLesson = module.lessons[currentLessonIndex + 1]
  const prevLesson = module.lessons[currentLessonIndex - 1]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href={`/modules/${params.slug}`}>
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Module
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
            <div className="text-sm text-muted-foreground">{lesson.duration} min read</div>
          </div>

          <div className="prose max-w-none dark:prose-invert mb-12">
            {lesson.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === "text" && <div dangerouslySetInnerHTML={{ __html: section.content }} />}
                {section.type === "diagram" && <LessonDiagram id={section.diagramId} />}
                {section.type === "code" && (
                  <div className="bg-muted p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">{section.content}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          {lesson.resources && lesson.resources.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {getResourceIcon(resource.type)}
                      <span className="font-medium">{resource.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <div className="mt-2 text-xs inline-block px-2 py-1 bg-primary/10 text-primary rounded">
                      {resource.type}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            {prevLesson ? (
              <Link href={`/modules/${params.slug}/${prevLesson.slug}`}>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Lesson
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <Link href={`/modules/${params.slug}/${nextLesson.slug}`}>
                <Button>
                  Next Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href={`/modules/${params.slug}`}>
                <Button>
                  Complete Module
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-4 sticky top-24">
            <h3 className="font-semibold mb-4">In this module</h3>
            <div className="space-y-2">
              {module.lessons.map((moduleLesson, index) => (
                <Link key={moduleLesson.slug} href={`/modules/${params.slug}/${moduleLesson.slug}`}>
                  <div
                    className={`flex items-center p-2 rounded-md text-sm ${
                      moduleLesson.slug === params.lessonSlug ? "bg-muted font-medium" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-muted-foreground/20 mr-2">
                      {index + 1}
                    </div>
                    <span className="truncate">{moduleLesson.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

