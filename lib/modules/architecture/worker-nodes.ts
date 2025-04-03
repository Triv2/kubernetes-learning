import type { Lesson } from "../../../types"

export const workerNodesLesson: Lesson = {
  slug: "worker-nodes",
  title: "Worker Node Components",
  duration: 15,
  content: [
    {
      type: "text",
      content:
        "<h2>Worker Node Components</h2><p>Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment. These components enable a node to communicate with the control plane and handle container workloads.</p>",
    },
    {
      type: "text",
      content:
        "<h3>kubelet</h3><p>The kubelet is an agent that runs on each node in the cluster. It makes sure that containers are running in a Pod as expected.</p><p><strong>Key responsibilities:</strong></p><ul><li>Communicates with the API server to receive Pod specifications</li><li>Ensures that the containers described in those PodSpecs are running and healthy</li><li>Reports node and Pod status to the control plane</li><li>Runs container liveness, readiness, and startup probes</li><li>Manages container lifecycle events</li><li>Collects and reports resource usage metrics</li></ul><p><strong>How kubelet works:</strong></p><ul><li>Watches for changes to Pod specifications assigned to its node</li><li>Uses the Container Runtime Interface (CRI) to interact with the container runtime</li><li>Mounts volumes specified in the Pod definition</li><li>Downloads secrets referenced by the Pod</li><li>Reports the status of Pods running on the node</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>kube-proxy</h3><p>kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept. It maintains network rules on nodes that allow network communication to your Pods from network sessions inside or outside of your cluster.</p><p><strong>Proxy modes:</strong></p><ul><li><strong>iptables</strong> (default): Uses iptables rules to redirect traffic to randomly selected backend Pods</li><li><strong>IPVS</strong> (IP Virtual Server): For clusters with a large number of Services, provides better performance and more load balancing algorithms</li><li><strong>userspace</strong> (legacy): Installs iptables rules that redirect traffic to a local proxy port, which then forwards to backend Pods</li></ul><p><strong>Key functions:</strong></p><ul><li>Implements the Kubernetes Service abstraction by maintaining network rules</li><li>Performs connection forwarding</li><li>Handles load balancing for Service endpoints</li><li>Provides basic health checking</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Container Runtime</h3><p>The container runtime is the software responsible for running containers. Kubernetes supports several container runtimes through the Container Runtime Interface (CRI).</p><p><strong>Supported container runtimes:</strong></p><ul><li><strong>containerd</strong>: A simple, robust, and portable container runtime</li><li><strong>CRI-O</strong>: A lightweight runtime specifically for Kubernetes</li><li><strong>Docker Engine</strong>: Through the dockershim adapter (deprecated in Kubernetes 1.20+)</li><li>Any implementation of the Kubernetes CRI</li></ul><p><strong>Container Runtime Interface (CRI):</strong></p><ul><li>Defines the API between Kubernetes and the container runtime</li><li>Allows for pluggable container runtimes</li><li>Includes image service and runtime service APIs</li><li>Enables innovation in container runtimes without changing Kubernetes core</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Node Components Interaction</h3><p>The node components work together to manage containers and provide the runtime environment:</p><ol><li>The kubelet receives Pod specifications from the API server</li><li>The kubelet uses the CRI to instruct the container runtime to pull images and run containers</li><li>The container runtime manages the containers, their images, and their execution environment</li><li>kube-proxy sets up networking rules to allow communication to and from Pods</li><li>The kubelet monitors container health and reports status back to the control plane</li></ol>",
    },
    {
      type: "code",
      content:
        "# View nodes in the cluster\n$ kubectl get nodes\n\n# Get detailed information about a node\n$ kubectl describe node <node-name>\n\n# Check kubelet status\n$ systemctl status kubelet\n\n# View kubelet logs\n$ journalctl -u kubelet\n\n# Check kube-proxy pods\n$ kubectl get pods -n kube-system -l k8s-app=kube-proxy\n\n# View container runtime information\n$ kubectl get nodes -o wide",
    },
  ],
  resources: [
    {
      title: "Kubernetes Node Components",
      url: "https://kubernetes.io/docs/concepts/overview/components/#node-components",
      type: "documentation",
      description: "Official documentation on Kubernetes node components.",
    },
    {
      title: "Kubelet",
      url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/",
      type: "documentation",
      description: "Reference documentation for the kubelet, the primary node agent in Kubernetes.",
    },
    {
      title: "Kube-proxy",
      url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
      type: "documentation",
      description: "Reference documentation for kube-proxy, the network proxy in Kubernetes.",
    },
    {
      title: "Container Runtime Interface (CRI)",
      url: "https://kubernetes.io/docs/concepts/architecture/cri/",
      type: "documentation",
      description: "Documentation on the Container Runtime Interface (CRI) in Kubernetes.",
    },
    {
      title: "Containerd",
      url: "https://containerd.io/",
      type: "tool",
      description: "Website for containerd, a popular container runtime used with Kubernetes.",
    },
    {
      title: "CRI-O",
      url: "https://cri-o.io/",
      type: "tool",
      description: "Website for CRI-O, a lightweight container runtime specifically for Kubernetes.",
    },
  ],
}

