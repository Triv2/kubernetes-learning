import type { Lesson } from "../../../types"

export const kubernetesComponentsLesson: Lesson = {
  slug: "kubernetes-components",
  title: "Core Kubernetes Components",
  duration: 15,
  content: [
    {
      type: "text",
      content:
        "<h2>Core Kubernetes Components</h2><p>Kubernetes consists of several key components that work together to provide the container orchestration platform. Understanding these components is essential for working with Kubernetes effectively.</p>",
    },
    {
      type: "diagram",
      diagramId: "k8s-components",
      content: "",
    },
    {
      type: "text",
      content:
        "<h3>Control Plane Components</h3><p>The control plane components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events.</p><ul><li><strong>kube-apiserver</strong>: The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally.</li><li><strong>etcd</strong>: Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.</li><li><strong>kube-scheduler</strong>: Watches for newly created Pods with no assigned node, and selects a node for them to run on based on resource requirements, constraints, and other factors.</li><li><strong>kube-controller-manager</strong>: Runs controller processes that regulate the state of the system. Examples include the node controller, job controller, endpoints controller, and service account & token controllers.</li><li><strong>cloud-controller-manager</strong>: (Optional) Embeds cloud-specific control logic. It allows you to link your cluster into your cloud provider's API.</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Node Components</h3><p>Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment.</p><ul><li><strong>kubelet</strong>: An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod as expected.</li><li><strong>kube-proxy</strong>: A network proxy that runs on each node, implementing part of the Kubernetes Service concept. It maintains network rules that allow communication to Pods from inside or outside of the cluster.</li><li><strong>Container Runtime</strong>: The software responsible for running containers. Kubernetes supports container runtimes such as Docker, containerd, CRI-O, and any implementation of the Kubernetes CRI (Container Runtime Interface).</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Addons</h3><p>Addons use Kubernetes resources to implement cluster features. Because these are providing cluster-level features, namespaced resources for addons belong within the kube-system namespace.</p><ul><li><strong>DNS</strong>: Cluster DNS is a DNS server that serves DNS records for Kubernetes services.</li><li><strong>Web UI (Dashboard)</strong>: A general purpose, web-based UI for Kubernetes clusters.</li><li><strong>Container Resource Monitoring</strong>: Records generic time-series metrics about containers in a central database.</li><li><strong>Cluster-level Logging</strong>: Saves container logs to a central log store with search/browsing interface.</li><li><strong>Network Plugins</strong>: Implement the Container Network Interface (CNI) specification, providing networking capabilities to the cluster.</li></ul>",
    },
    {
      type: "code",
      content:
        "# View control plane components\n$ kubectl get pods -n kube-system\n\n# View nodes in the cluster\n$ kubectl get nodes\n\n# Get detailed information about a node\n$ kubectl describe node <node-name>\n\n# View system component logs\n$ kubectl logs -n kube-system <pod-name>",
    },
  ],
  resources: [
    {
      title: "Kubernetes Components",
      url: "https://kubernetes.io/docs/concepts/overview/components/",
      type: "documentation",
      description: "Official documentation on the components that make up a Kubernetes cluster.",
    },
    {
      title: "Kubernetes Architecture Explained",
      url: "https://www.youtube.com/watch?v=umXEmn3cMWY",
      type: "video",
      description: "Video explanation of Kubernetes architecture and components.",
    },
    {
      title: "Kubernetes Control Plane",
      url: "https://kubernetes.io/docs/concepts/overview/components/#control-plane-components",
      type: "documentation",
      description: "Detailed explanation of Kubernetes control plane components.",
    },
    {
      title: "Kubernetes Node Components",
      url: "https://kubernetes.io/docs/concepts/overview/components/#node-components",
      type: "documentation",
      description: "Detailed explanation of Kubernetes node components.",
    },
    {
      title: "etcd Documentation",
      url: "https://etcd.io/docs/",
      type: "documentation",
      description: "Official documentation for etcd, the distributed key-value store used by Kubernetes.",
    },
  ],
}

