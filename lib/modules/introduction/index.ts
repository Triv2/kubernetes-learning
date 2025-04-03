// Introduction module index
import type { Module } from "../../types"
import { whatIsKubernetesLesson } from "./lessons/what-is-kubernetes"
import { kubernetesHistoryLesson } from "./lessons/kubernetes-history"
import { kubernetesUseCasesLesson } from "./lessons/kubernetes-use-cases"
import { kubernetesBenefitsLesson } from "./lessons/kubernetes-benefits"
import { quickStartLesson } from "./lessons/quick-start"
import { kubernetesComponentsLesson } from "./lessons/kubernetes-components"

export const introductionModule: Module = {
  slug: "introduction",
  title: "Introduction to Kubernetes",
  description: "Learn the fundamentals of Kubernetes, its history, architecture, and real-world applications",
  level: "beginner",
  learningObjectives: [
    "Understand what Kubernetes is and the problems it solves in modern application deployment",
    "Learn about the history and evolution of Kubernetes from Borg to CNCF",
    "Explore common use cases and implementation patterns for Kubernetes in production",
    "Understand the benefits, challenges, and limitations of Kubernetes adoption",
    "Set up a basic Kubernetes environment using Minikube and kubectl",
    "Learn essential Kubernetes terminology and concepts",
  ],
  lessons: [
    whatIsKubernetesLesson,
    kubernetesHistoryLesson,
    kubernetesUseCasesLesson,
    kubernetesBenefitsLesson,
    quickStartLesson,
    kubernetesComponentsLesson,
  ],
  resources: [
    {
      title: "Kubernetes Documentation",
      url: "https://kubernetes.io/docs/home/",
      type: "documentation",
      description: "Official Kubernetes documentation covering all aspects of the platform.",
    },
    {
      title: "Kubernetes: Up and Running",
      url: "https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/",
      type: "book",
      description:
        "Comprehensive book by Kelsey Hightower, Brendan Burns, and Joe Beda, covering Kubernetes fundamentals.",
    },
    {
      title: "Introduction to Kubernetes (edX)",
      url: "https://www.edx.org/course/introduction-to-kubernetes",
      type: "course",
      description: "Free course from the Linux Foundation that provides an introduction to Kubernetes.",
    },
    {
      title: "Kubernetes The Hard Way",
      url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
      type: "github",
      description: "Step-by-step guide to bootstrap a Kubernetes cluster from scratch by Kelsey Hightower.",
    },
    {
      title: "Kubernetes Basics Interactive Tutorial",
      url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      type: "tutorial",
      description: "Interactive tutorial that teaches Kubernetes basics with a series of hands-on modules.",
    },
    {
      title: "CNCF Kubernetes Project",
      url: "https://www.cncf.io/projects/kubernetes/",
      type: "documentation",
      description: "Cloud Native Computing Foundation's official page for the Kubernetes project.",
    },
    {
      title: "Kubernetes Best Practices",
      url: "https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices",
      type: "article",
      description: "Collection of best practices for working with Kubernetes from Google Cloud.",
    },
    {
      title: "Kubernetes Podcast",
      url: "https://kubernetespodcast.com/",
      type: "article",
      description: "Weekly podcast about Kubernetes and the cloud native ecosystem.",
    },
  ],
}

