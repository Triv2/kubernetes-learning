import type { Lesson } from "../../../types"

export const controlPlaneLesson: Lesson = {
  slug: "control-plane",
  title: "Control Plane Components",
  duration: 18,
  content: [
    {
      type: "text",
      content:
        "<h2>Control Plane Components</h2><p>The control plane's components make global decisions about the cluster, as well as detecting and responding to cluster events. These components can be run on any machine in the cluster, but typically they run on dedicated machines that we call the control plane nodes.</p>",
    },
    {
      type: "text",
      content:
        "<h3>kube-apiserver</h3><p>The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally—that is, it scales by deploying more instances.</p><p><strong>Key responsibilities:</strong></p><ul><li>Serves as the primary interface to the cluster for both internal and external clients</li><li>Validates and processes API requests</li><li>Manages authentication, authorization, and admission control</li><li>Serves as the gateway to the cluster state stored in etcd</li></ul><p><strong>Design principles:</strong></p><ul><li>RESTful API design with resource-based endpoints</li><li>Horizontal scalability through stateless design</li><li>Versioned API with strong backward compatibility guarantees</li><li>Extensible through Custom Resource Definitions (CRDs) and API aggregation</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>etcd</h3><p>Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data. Always have a backup plan for etcd's data for your Kubernetes clusters.</p><p><strong>Key characteristics:</strong></p><ul><li>Distributed and highly available key-value store</li><li>Provides strong consistency guarantees through the Raft consensus algorithm</li><li>Stores all cluster state, including objects, configuration, and secrets</li><li>Supports watch operations for efficient change notification</li></ul><p><strong>Best practices:</strong></p><ul><li>Run etcd as a cluster with at least three nodes for high availability</li><li>Regularly back up etcd data</li><li>Monitor etcd performance and resource usage</li><li>Use separate disks with low latency for etcd storage</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>kube-scheduler</h3><p>The scheduler watches for newly created Pods with no assigned node, and selects a node for them to run on.</p><p><strong>Scheduling process:</strong></p><ul><li><strong>Filtering</strong>: Find the set of nodes where it's feasible to schedule the Pod based on resource requirements, node selectors, affinity/anti-affinity rules, taints and tolerations, etc.</li><li><strong>Scoring</strong>: Rank the remaining nodes to find the best placement based on various priority functions</li><li><strong>Binding</strong>: Update the Pod definition with the selected node name</li></ul><p><strong>Advanced scheduling features:</strong></p><ul><li>Pod affinity and anti-affinity</li><li>Node affinity and anti-affinity</li><li>Taints and tolerations</li><li>Custom schedulers</li><li>Multiple schedulers</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>kube-controller-manager</h3><p>The controller manager runs controller processes that regulate the state of the system. Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process.</p><p><strong>Some of these controllers include:</strong></p><ul><li><strong>Node controller</strong>: Responsible for noticing and responding when nodes go down</li><li><strong>Replication controller</strong>: Responsible for maintaining the correct number of pods for every replication controller object in the system</li><li><strong>Endpoints controller</strong>: Populates the Endpoints object (joins Services & Pods)</li><li><strong>Service Account & Token controllers</strong>: Create default accounts and API access tokens for new namespaces</li><li><strong>Job controller</strong>: Watches for Job objects that represent one-off tasks, then creates Pods to run those tasks to completion</li><li><strong>CronJob controller</strong>: Executes Jobs on a time-based schedule</li><li><strong>Deployment controller</strong>: Provides declarative updates for Pods and ReplicaSets</li><li><strong>StatefulSet controller</strong>: Manages the deployment and scaling of a set of Pods with guarantees about ordering and uniqueness</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>cloud-controller-manager</h3><p>The cloud controller manager is a Kubernetes control plane component that embeds cloud-specific control logic. It lets you link your cluster into your cloud provider's API, and separates the components that interact with that cloud platform from components that only interact with your cluster.</p><p><strong>Cloud-specific controllers:</strong></p><ul><li><strong>Node controller</strong>: For checking the cloud provider to determine if a node has been deleted in the cloud after it stops responding</li><li><strong>Route controller</strong>: For setting up routes in the underlying cloud infrastructure</li><li><strong>Service controller</strong>: For creating, updating and deleting cloud provider load balancers</li><li><strong>Volume controller</strong>: For creating, attaching, and mounting volumes, and interacting with the cloud provider to orchestrate volumes</li></ul>",
    },
    {
      type: "code",
      content:
        "# View control plane components in a cluster\n$ kubectl get pods -n kube-system\n\n# Get detailed information about the API server\n$ kubectl describe pod kube-apiserver-<node-name> -n kube-system\n\n# Check etcd status\n$ kubectl exec -it etcd-<node-name> -n kube-system -- etcdctl member list\n\n# View controller manager logs\n$ kubectl logs kube-controller-manager-<node-name> -n kube-system",
    },
  ],
  resources: [
    {
      title: "Kubernetes Control Plane Components",
      url: "https://kubernetes.io/docs/concepts/overview/components/#control-plane-components",
      type: "documentation",
      description: "Official documentation on Kubernetes control plane components.",
    },
    {
      title: "Kubernetes API Server",
      url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
      type: "documentation",
      description: "Reference documentation for the Kubernetes API server.",
    },
    {
      title: "etcd Documentation",
      url: "https://etcd.io/docs/",
      type: "documentation",
      description: "Official documentation for etcd, the distributed key-value store used by Kubernetes.",
    },
    {
      title: "Kubernetes Scheduler",
      url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
      type: "documentation",
      description: "Documentation on how the Kubernetes scheduler works.",
    },
    {
      title: "Kubernetes Controller Manager",
      url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
      type: "documentation",
      description: "Reference documentation for the Kubernetes controller manager.",
    },
    {
      title: "Kubernetes Control Plane Deep Dive",
      url: "https://www.youtube.com/watch?v=8C_SCDbUJTg",
      type: "video",
      description: "In-depth video on Kubernetes control plane components and how they interact.",
    },
  ],
}

