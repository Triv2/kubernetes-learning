import type { Lesson } from "../../../types"

export const cniLesson: Lesson = {
  slug: "cni",
  title: "Container Network Interface (CNI)",
  duration: 15,
  content: [
    {
      type: "text",
      content:
        "<h2>Container Network Interface (CNI)</h2><p>The Container Network Interface (CNI) is a specification and libraries for writing plugins to configure network interfaces in Linux containers. Kubernetes uses CNI plugins to set up networking for pods.</p><p>CNI is responsible for:</p><ul><li>Allocating network interfaces to pods</li><li>Configuring the network so pods can communicate with each other</li><li>Cleaning up network resources when pods are deleted</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>CNI Specification</h3><p>The CNI specification defines:</p><ul><li>A simple contract between the container runtime and network plugins</li><li>A network configuration format in JSON</li><li>Execution of plugins as executables (not long-running processes)</li></ul><p>When a pod is created or deleted, the kubelet calls the CNI plugin with the appropriate command (ADD or DEL) and provides the network configuration. The plugin then sets up or tears down the network for the pod.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Popular CNI Plugins</h3><p>There are many CNI plugins available, each with different features and trade-offs:</p><ul><li><strong>Calico</strong>: Uses BGP to route packets between nodes, provides network policy enforcement, and can operate without an overlay network for better performance</li><li><strong>Flannel</strong>: Simple overlay network that creates a flat network across nodes, easy to set up but with fewer features</li><li><strong>Weave Net</strong>: Creates a virtual network that connects containers across multiple nodes, with support for encryption and network policy</li><li><strong>Cilium</strong>: Uses eBPF for networking and security, providing high-performance networking, observability, and security</li><li><strong>AWS VPC CNI</strong>: Assigns AWS Elastic Network Interfaces directly to pods, providing native AWS networking</li><li><strong>Azure CNI</strong>: Integrates with Azure Virtual Network for native Azure networking</li><li><strong>Google Cloud CNI</strong>: Integrates with Google Cloud VPC for native GCP networking</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>How CNI Works in Kubernetes</h3><p>The process of setting up networking for a pod involves several steps:</p><ol><li>The kubelet creates a network namespace for the pod</li><li>The kubelet identifies the CNI plugin to use based on configuration</li><li>The kubelet calls the CNI plugin with the ADD command, providing:</li><ul><li>The container ID</li><li>The network namespace path</li><li>The network configuration</li></ul><li>The CNI plugin:</li><ul><li>Sets up the network namespace</li><li>Allocates an IP address for the pod</li><li>Sets up routes and other network configuration</li><li>Returns the IP address and other information to the kubelet</li></ul><li>The kubelet stores this information and makes it available through the Kubernetes API</li></ol><p>When a pod is deleted, the process is reversed, with the kubelet calling the CNI plugin with the DEL command to clean up network resources.</p>",
    },
    {
      type: "text",
      content:
        "<h3>CNI Configuration</h3><p>CNI plugins are configured through JSON files in the /etc/cni/net.d/ directory on each node. The configuration specifies:</p><ul><li>The CNI plugin to use</li><li>The plugin configuration parameters</li><li>Additional plugins to chain (e.g., for IPAM, port mapping, etc.)</li></ul><p>In Kubernetes, this configuration is typically managed by the CNI plugin's installation process, which might use DaemonSets, ConfigMaps, or other mechanisms to distribute the configuration to nodes.</p>",
    },
    {
      type: "code",
      content:
        '# Example CNI configuration for Calico\n{\n  "name": "k8s-pod-network",\n  "cniVersion": "0.3.1",\n  "plugins": [\n    {\n      "type": "calico",\n      "log_level": "info",\n      "datastore_type": "kubernetes",\n      "nodename": "node-1",\n      "ipam": {\n        "type": "calico-ipam"\n      },\n      "policy": {\n        "type": "k8s"\n      },\n      "kubernetes": {\n        "kubeconfig": "/etc/cni/net.d/calico-kubeconfig"\n      }\n    },\n    {\n      "type": "portmap",\n      "snat": true,\n      "capabilities": {"portMappings": true}\n    }\n  ]\n}\n\n# Install Calico CNI plugin\n$ kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml\n\n# View CNI configuration on a node\n$ ls /etc/cni/net.d/\n$ cat /etc/cni/net.d/10-calico.conflist',
    },
  ],
  resources: [
    {
      title: "Container Network Interface (CNI) Specification",
      url: "https://github.com/containernetworking/cni/blob/master/SPEC.md",
      type: "github",
      description: "Official specification for the Container Network Interface (CNI).",
    },
    {
      title: "Kubernetes CNI Overview",
      url: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
      type: "documentation",
      description: "Official documentation on network plugins in Kubernetes.",
    },
    {
      title: "Calico",
      url: "https://www.projectcalico.org/",
      type: "tool",
      description: "Website for Calico, a popular CNI plugin for Kubernetes.",
    },
    {
      title: "Flannel",
      url: "https://github.com/flannel-io/flannel",
      type: "github",
      description: "GitHub repository for Flannel, a simple CNI plugin for Kubernetes.",
    },
    {
      title: "Cilium",
      url: "https://cilium.io/",
      type: "tool",
      description: "Website for Cilium, a CNI plugin that uses eBPF for networking and security.",
    },
    {
      title: "Weave Net",
      url: "https://www.weave.works/oss/net/",
      type: "tool",
      description: "Website for Weave Net, a CNI plugin that creates a virtual network for Kubernetes.",
    },
    {
      title: "CNI Plugins",
      url: "https://github.com/containernetworking/plugins",
      type: "github",
      description: "GitHub repository for standard CNI plugins maintained by the CNI project.",
    },
    {
      title: "Kubernetes CNI Deep Dive",
      url: "https://www.youtube.com/watch?v=zChkx-AB5Xc",
      type: "video",
      description: "In-depth video on the Container Network Interface (CNI) in Kubernetes.",
    },
  ],
}

