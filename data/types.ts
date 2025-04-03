export interface LessonModule {
  slug: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  learningObjectives: string[]
  lessons: Lesson[]
  resources?: Resource[] // Added resources field at module level
}

export interface Lesson {
  slug: string
  title: string
  duration: number
  content: LessonContent[]
  resources?: Resource[] // Resources field for lessons
}

export interface LessonContent {
  type: "text" | "diagram" | "code"
  content: string
  diagramId?: string
}

// Interface for learning resources
export interface Resource {
  title: string
  url: string
  type: "documentation" | "tutorial" | "video" | "article" | "tool" | "github" | "course" | "book"
  description: string
}

