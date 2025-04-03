// Architecture module index
import type { Module } from "../../types"
import { overviewLesson } from "./lessons/overview"
import { controlPlaneLesson } from "./lessons/control-plane"
import { workerNodesLesson } from "./lessons/worker-nodes"
import { kubernetesObjectsLesson } from "./lessons/kubernetes-objects"
import { apiServerLesson } from "./lessons/api-server"
import { communicationLesson } from "./lessons/communication"
import { storageArchitectureLesson } from "./lessons/storage-architecture"

export const architectureModule: Module = {
  slug: "architecture",
  title: "Kubernetes Architecture",
  description: "Understand the components and architecture of Kubernetes in depth",
  level: "beginner",
  learningObjectives: [
    "Understand the Kubernetes architecture and how components interact",
    "Learn about the control plane components and their responsibilities",
    "Explore worker node components and container runtime integration",
    "Understand how the Kubernetes API and resource model works",
    "Learn about the etcd distributed database and its role in Kubernetes",
    "Understand Kubernetes networking principles and implementation",
    "Explore how Kubernetes handles storage and persistence",
  ],
  lessons: [
    overviewLesson,
    controlPlaneLesson,
    workerNodesLesson,
    kubernetesObjectsLesson,
    apiServerLesson,
    communicationLesson,
    storageArchitectureLesson,
  ],
  resources: [
    {
      title: "Kubernetes Components",
      url: "https://kubernetes.io/docs/concepts/overview/components/",
      type: "documentation",
      description: "Official documentation on Kubernetes components and architecture.",
    },
    {
      title: "Kubernetes Architecture Explained",
      url: "https://www.youtube.com/watch?v=umXEmn3cMWY",
      type: "video",
      description: "Comprehensive video explanation of Kubernetes architecture with diagrams.",
    },
    {
      title: "Kubernetes Design Principles",
      url: "https://kubernetes.io/docs/concepts/architecture/",
      type: "documentation",
      description: "Official documentation on Kubernetes architecture and design principles.",
    },
    {
      title: "Kubernetes Internal Architecture",
      url: "https://github.com/kubernetes/community/blob/master/contributors/design-proposals/architecture/architecture.md",
      type: "github",
      description: "Detailed design document on Kubernetes architecture from the Kubernetes community.",
    },
    {
      title: "Kubernetes Architecture 101",
      url: "https://spot.io/resources/kubernetes-architecture-101/",
      type: "article",
      description: "Beginner-friendly article explaining Kubernetes architecture concepts.",
    },
    {
      title: "Kubernetes in Action",
      url: "https://www.manning.com/books/kubernetes-in-action",
      type: "book",
      description: "Comprehensive book that covers Kubernetes architecture and components in depth.",
    },
    {
      title: "etcd Documentation",
      url: "https://etcd.io/docs/",
      type: "documentation",
      description: "Official documentation for etcd, the distributed key-value store used by Kubernetes.",
    },
    {
      title: "Kubernetes Architecture Deep Dive",
      url: "https://www.youtube.com/watch?v=8C_SCDbUJTg",
      type: "video",
      description: "In-depth video on Kubernetes architecture, components, and how they interact.",
    },
    {
      title: "Kubernetes Failure Stories",
      url: "https://k8s.af/",
      type: "article",
      description: "Collection of public failure/horror stories related to Kubernetes to learn from others' mistakes.",
    },
  ],
}

