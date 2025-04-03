import type { Lesson } from "../../../types"

export const apiServerLesson: Lesson = {
  slug: "api-server",
  title: "Kubernetes API Server",
  duration: 12,
  content: [
    {
      type: "text",
      content:
        "<h2>Kubernetes API Server</h2><p>The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally. The API server is the central management entity and the only component that directly communicates with the etcd data store.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Key Functions</h3><ul><li>Serves as the frontend for the Kubernetes control plane</li><li>Exposes the Kubernetes API</li><li>Processes REST operations</li><li>Validates and configures data for API objects</li><li>Updates the corresponding objects in etcd</li><li>Serves as the gateway between cluster components</li><li>Implements authentication, authorization, and admission control</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>API Structure</h3><p>The Kubernetes API is structured around RESTful principles:</p><ul><li><strong>Resources</strong>: Objects like Pods, Services, and Deployments</li><li><strong>Verbs</strong>: Standard HTTP methods like GET, POST, PUT, DELETE</li><li><strong>Versioning</strong>: API groups and versions (e.g., apps/v1, networking.k8s.io/v1)</li><li><strong>Namespaces</strong>: Logical partitioning of resources</li></ul><p>The API is versioned to ensure backward compatibility and smooth transitions during upgrades. Version types include:</p><ul><li><strong>Alpha</strong>: May be buggy, disabled by default, support may be dropped at any time</li><li><strong>Beta</strong>: Code is well tested, enabled by default, details may change but support won't be dropped</li><li><strong>Stable</strong>: Will appear in released software for many versions</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>API Access</h3><p>The API can be accessed via:</p><ul><li><strong>kubectl</strong>: The command-line interface for Kubernetes</li><li><strong>REST calls</strong>: Direct HTTP requests to the API server</li><li><strong>Client libraries</strong>: Official libraries for various programming languages</li><li><strong>Custom controllers</strong>: Components that watch for changes to specific resources and take action</li></ul><p>Authentication to the API server is done through one or more authentication methods:</p><ul><li>Client certificates</li><li>Bearer tokens</li><li>Authentication proxy</li><li>Service account tokens</li><li>OpenID Connect tokens</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Authorization and Admission Control</h3><p>After authentication, requests go through:</p><ul><li><strong>Authorization</strong>: Determines if the authenticated user has permission to perform the requested action on the resource. Kubernetes supports multiple authorization modules:</li><ul><li>RBAC (Role-Based Access Control)</li><li>ABAC (Attribute-Based Access Control)</li><li>Node Authorization</li><li>Webhook Authorization</li></ul><li><strong>Admission Control</strong>: Software modules that can modify or reject requests. Admission controllers act on the content of objects and can:</li><ul><li>Validate requests (e.g., ensure all required fields are set)</li><li>Mutate requests (e.g., set default values for missing fields)</li><li>Examples include: NamespaceLifecycle, LimitRanger, ServiceAccount, PodSecurityPolicy</li></ul></ul>",
    },
    {
      type: "code",
      content:
        "# Example of accessing the API server using kubectl\n$ kubectl get pods\n$ kubectl get services\n$ kubectl apply -f deployment.yaml\n\n# Direct API access using curl\n$ APISERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')\n$ TOKEN=$(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode)\n$ curl -X GET $APISERVER/api/v1/namespaces/default/pods --header \"Authorization: Bearer $TOKEN\" --insecure\n\n# View API resources and their versions\n$ kubectl api-resources\n$ kubectl api-versions\n\n# Explore API documentation\n$ kubectl explain pod\n$ kubectl explain deployment.spec.strategy",
    },
  ],
  resources: [
    {
      title: "Kubernetes API Server",
      url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
      type: "documentation",
      description: "Reference documentation for the Kubernetes API server.",
    },
    {
      title: "Kubernetes API Overview",
      url: "https://kubernetes.io/docs/reference/using-api/",
      type: "documentation",
      description: "Overview of the Kubernetes API and how to access it.",
    },
    {
      title: "Kubernetes API Access Control",
      url: "https://kubernetes.io/docs/reference/access-authn-authz/",
      type: "documentation",
      description: "Documentation on authentication, authorization, and admission control in Kubernetes.",
    },
    {
      title: "Kubernetes API Concepts",
      url: "https://kubernetes.io/docs/reference/using-api/api-concepts/",
      type: "documentation",
      description: "Concepts and terminology used in the Kubernetes API.",
    },
    {
      title: "Extending the Kubernetes API",
      url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/",
      type: "documentation",
      description: "Documentation on extending the Kubernetes API with custom resources and aggregation.",
    },
    {
      title: "Kubernetes API Server Deep Dive",
      url: "https://www.youtube.com/watch?v=NrxM4kBPVmo",
      type: "video",
      description: "In-depth video on the Kubernetes API server architecture and implementation.",
    },
  ],
}

