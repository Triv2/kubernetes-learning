import type { Lesson } from "../../../types"

export const whatIsKubernetesLesson: Lesson = {
  slug: "what-is-kubernetes",
  title: "What is Kubernetes?",
  duration: 15, // Increased duration due to more content
  content: [
    {
      type: "text",
      content:
        "<h2>What is Kubernetes?</h2><p>Kubernetes (K8s) is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.</p><p>Kubernetes builds upon 15 years of experience of running production workloads at Google, combined with best-of-breed ideas and practices from the community.</p><p>At its core, Kubernetes provides a container-centric management environment. It orchestrates computing, networking, and storage infrastructure on behalf of user workloads. This provides much of the simplicity of Platform as a Service (PaaS) with the flexibility of Infrastructure as a Service (IaaS).</p><p>The name Kubernetes originates from Greek, meaning 'helmsman' or 'pilot', and is the root of words like 'cybernetic' and 'government'. K8s is an abbreviation derived by replacing the 8 letters 'ubernete' with '8'.</p>",
    },
    {
      type: "diagram",
      diagramId: "k8s-architecture",
      content: "",
    },
    {
      type: "text",
      content:
        "<h3>Key Features</h3><ul><li><strong>Service discovery and load balancing</strong>: Kubernetes can expose a container using the DNS name or using their own IP address. If traffic to a container is high, Kubernetes is able to load balance and distribute the network traffic so that the deployment is stable.</li><li><strong>Storage orchestration</strong>: Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more.</li><li><strong>Automated rollouts and rollbacks</strong>: You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate.</li><li><strong>Self-healing</strong>: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.</li><li><strong>Secret and configuration management</strong>: Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration.</li><li><strong>Automatic bin packing</strong>: You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources.</li><li><strong>Batch execution</strong>: In addition to services, Kubernetes can manage your batch and CI workloads, replacing containers that fail, if desired.</li><li><strong>Horizontal scaling</strong>: Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.</li><li><strong>IPv4/IPv6 dual-stack</strong>: Allocation of IPv4 and IPv6 addresses to Pods and Services.</li><li><strong>Designed for extensibility</strong>: Add features to your Kubernetes cluster without modifying source code.</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Core Concepts</h3><p>Understanding Kubernetes requires familiarity with several core concepts:</p><ul><li><strong>Pods</strong>: The smallest deployable units in Kubernetes. A Pod represents a set of running containers on your cluster and typically runs a single primary container.</li><li><strong>Services</strong>: An abstract way to expose an application running on a set of Pods as a network service.</li><li><strong>Volumes</strong>: A directory containing data, accessible to the containers in a pod.</li><li><strong>Namespaces</strong>: Virtual clusters backed by the same physical cluster, providing a way to divide cluster resources.</li><li><strong>Deployments</strong>: Provide declarative updates for Pods and ReplicaSets, allowing you to describe an application's life cycle.</li><li><strong>ConfigMaps and Secrets</strong>: Ways to separate configuration from application code for greater portability.</li><li><strong>StatefulSets</strong>: Manage the deployment and scaling of a set of Pods, with guarantees about the ordering and uniqueness of these Pods.</li><li><strong>DaemonSets</strong>: Ensure that all (or some) nodes run a copy of a Pod, typically used for system-level operations.</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>What Kubernetes Is Not</h3><p>Kubernetes is not a traditional, all-inclusive PaaS (Platform as a Service) system. It operates at the container level rather than at the hardware level, providing some generally applicable features common to PaaS offerings, such as deployment, scaling, and load balancing. However, Kubernetes is not monolithic, and these default solutions are optional and pluggable.</p><p>Kubernetes:</p><ul><li>Does not limit the types of applications supported. If an application can run in a container, it should run great on Kubernetes.</li><li>Does not deploy source code and does not build your application. Continuous Integration, Delivery, and Deployment (CI/CD) workflows are determined by organization cultures and preferences as well as technical requirements.</li><li>Does not provide application-level services, such as middleware, data-processing frameworks, databases, caches, nor cluster storage systems as built-in services.</li><li>Does not dictate logging, monitoring, or alerting solutions. It provides some integrations as proof of concept, and mechanisms to collect and export metrics.</li><li>Does not provide nor mandate a configuration language/system. It provides a declarative API that may be targeted by arbitrary forms of declarative specifications.</li><li>Does not provide nor adopt any comprehensive machine configuration, maintenance, management, or self-healing systems.</li></ul><p>Additionally, Kubernetes is not a mere orchestration system. In fact, it eliminates the need for orchestration. The technical definition of orchestration is execution of a defined workflow: first do A, then B, then C. In contrast, Kubernetes comprises a set of independent, composable control processes that continuously drive the current state towards the provided desired state. It shouldn't matter how you get from A to C. Centralized control is also not required. This results in a system that is easier to use and more powerful, robust, resilient, and extensible.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Why Use Kubernetes?</h3><p>Containers are a good way to bundle and run your applications. In a production environment, you need to manage the containers that run the applications and ensure that there is no downtime. For example, if a container goes down, another container needs to start. Wouldn't it be easier if this behavior was handled by a system?</p><p>That's how Kubernetes comes to the rescue! Kubernetes provides you with a framework to run distributed systems resiliently. It takes care of scaling and failover for your application, provides deployment patterns, and more.</p><p>For example, Kubernetes can easily manage a canary deployment for your system.</p><p>Kubernetes provides you with:</p><ul><li><strong>Service discovery and load balancing</strong>: No need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.</li><li><strong>Storage orchestration</strong>: Automatically mount the storage system of your choice, whether from local storage, a public cloud provider such as GCP or AWS, or a network storage system such as NFS, iSCSI, Gluster, Ceph, Cinder, or Flocker.</li><li><strong>Automated rollouts and rollbacks</strong>: You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate. For example, you can automate Kubernetes to create new containers for your deployment, remove existing containers and adopt all their resources to the new container.</li><li><strong>Automatic bin packing</strong>: You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources.</li><li><strong>Self-healing</strong>: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.</li><li><strong>Secret and configuration management</strong>: Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration.</li></ul>",
    },
  ],
  resources: [
    {
      title: "Kubernetes Documentation",
      url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
      type: "documentation",
      description: "Official Kubernetes documentation explaining what Kubernetes is and its core concepts.",
    },
    {
      title: "Kubernetes: Up and Running",
      url: "https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/",
      type: "article",
      description: "A comprehensive book for learning Kubernetes from the ground up.",
    },
    {
      title: "Kubernetes The Hard Way",
      url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
      type: "github",
      description:
        "A tutorial for bootstrapping a Kubernetes cluster from scratch, great for understanding the components.",
    },
    {
      title: "Introduction to Kubernetes",
      url: "https://www.youtube.com/watch?v=PH-2FfFD2PU",
      type: "video",
      description: "A beginner-friendly video introduction to Kubernetes concepts and architecture.",
    },
    {
      title: "Kubernetes Playground",
      url: "https://www.katacoda.com/courses/kubernetes/playground",
      type: "tool",
      description: "An interactive environment to experiment with Kubernetes without installing anything.",
    },
  ],
}

