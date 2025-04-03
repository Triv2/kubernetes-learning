import type { Module, Lesson } from "./types"

// We'll define modules as a parameter to avoid circular dependencies
/**
 * Get module data by slug
 */
export function getModuleData(modules: Record<string, Module>, slug: string): Module | undefined {
  return modules[slug]
}

/**
 * Get lesson data by module slug and lesson slug
 */
export function getLessonData(
  modules: Record<string, Module>,
  moduleSlug: string,
  lessonSlug: string,
): Lesson | undefined {
  const module = getModuleData(modules, moduleSlug)
  return module?.lessons.find((lesson) => lesson.slug === lessonSlug)
}

/**
 * Utility function for conditionally joining class names
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

