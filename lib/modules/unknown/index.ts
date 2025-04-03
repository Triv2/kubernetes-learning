import { LessonModule } from "@/data/types";
import { networkingFundamentalsLesson } from "../networking/networking-fundamentals";
import { servicesLesson } from "../networking/services";
import { ingressLesson } from "../networking/ingress";
import { networkPoliciesLesson } from "../networking/network-policies";
import { dnsLesson } from "../networking/dns";
import { cniLesson } from "../networking/cni";


export const networkingModule: LessonModule = {
  slug: "networking",
  title: "Kubernetes Networking",
  description: "Learn about networking concepts and implementations in Kubernetes",
  level: "intermediate",
  learningObjectives: [
    "Understand Kubernetes networking fundamentals and the IP-per-pod model",
    "Learn about Services, their types, and how they enable service discovery",
    "Explore Ingress resources and Ingress Controllers for HTTP routing",
    "Understand Network Policies for securing pod-to-pod communication",
    "Learn about DNS in Kubernetes for service discovery",
    "Explore Container Network Interface (CNI) and network plugins",
    "Understand advanced networking concepts like service meshes",
  ],
  lessons: [networkingFundamentalsLesson, servicesLesson, ingressLesson, networkPoliciesLesson, dnsLesson, cniLesson],
  resources: [
    {
      title: "Kubernetes Networking",
      url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
      type: "documentation",
      description: "Official documentation on Kubernetes networking concepts and implementation.",
    },
    {
      title: "Kubernetes Network Policies",
      url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
      type: "documentation",
      description: "Official documentation on Kubernetes Network Policies for securing pod-to-pod communication.",
    },
    {
      title: "Kubernetes Services, Load Balancing, and Networking",
      url: "https://kubernetes.io/docs/concepts/services-networking/",
      type: "documentation",
      description: "Comprehensive guide to services and networking in Kubernetes.",
    },
    {
      title: "Kubernetes Networking Deep Dive",
      url: "https://www.youtube.com/watch?v=tq9ng_Nz9j8",
      type: "video",
      description: "In-depth video explaining Kubernetes networking concepts and implementation.",
    },
    {
      title: "Kubernetes Networking Model",
      url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/#the-kubernetes-network-model",
      type: "documentation",
      description: "Detailed explanation of the Kubernetes networking model and its requirements.",
    },
    {
      title: "Container Network Interface (CNI) Specification",
      url: "https://github.com/containernetworking/cni/blob/master/SPEC.md",
      type: "github",
      description: "Official specification for the Container Network Interface (CNI) used by Kubernetes.",
    },
    {
      title: "Kubernetes DNS for Services and Pods",
      url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
      type: "documentation",
      description: "Official documentation on DNS for service discovery in Kubernetes.",
    },
    {
      title: "Kubernetes Ingress Controllers",
      url: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
      type: "documentation",
      description: "Guide to Ingress controllers for HTTP routing in Kubernetes.",
    },
    {
      title: "Calico",
      url: "https://www.projectcalico.org/",
      type: "tool",
      description: "Popular CNI plugin that provides networking and network policy for Kubernetes.",
    },
    {
      title: "Cilium",
      url: "https://cilium.io/",
      type: "tool",
      description:
        "Open source software for providing, securing, and observing network connectivity between container workloads.",
    },
    {
      title: "Kubernetes Network Policy Recipes",
      url: "https://github.com/ahmetb/kubernetes-network-policy-recipes",
      type: "github",
      description: "Collection of Kubernetes Network Policy examples for various common scenarios.",
    },
  ],
}

