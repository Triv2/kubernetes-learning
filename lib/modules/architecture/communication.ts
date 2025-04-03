import type { Lesson } from "../../../types"

export const communicationLesson: Lesson = {
  slug: "communication",
  title: "Component Communication",
  duration: 12,
  content: [
    {
      type: "text",
      content:
        "<h2>Component Communication</h2><p>Understanding how the various components in a Kubernetes cluster communicate with each other is essential for troubleshooting and advanced configuration. Kubernetes uses a combination of direct communication, API server mediation, and watch-based notification mechanisms.</p>",
    },
    {
      type: "diagram",
      diagramId: "k8s-networking",
      content: "",
    },
    {
      type: "text",
      content:
        "<h3>Control Plane to Node Communication</h3><p>There are two primary communication paths from the control plane to the nodes:</p><ul><li><strong>API Server to Kubelet</strong>: Used for:</li><ul><li>Fetching logs from pods</li><li>Attaching to running pods (kubectl exec)</li><li>Providing port-forwarding functionality</li><li>These connections terminate at the kubelet's HTTPS endpoint</li></ul><li><strong>API Server to Node, Pod, and Service</strong>:</li><ul><li>Plain HTTP connections by default (not authenticated or encrypted)</li><li>Can be run over a secure HTTPS connection</li><li>Used for metrics collection, health checks, and other monitoring functions</li></ul></ul><p>By default, API server to kubelet communication is secured with:</p><ul><li>TLS encryption</li><li>API server authentication to the kubelet</li><li>Kubelet authorization of API server requests</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Node to Control Plane Communication</h3><p>Nodes communicate with the control plane primarily through the API server. The kubelets update the node status to the API server periodically, and watch for changes to their assigned pods.</p><p>This communication model follows a hub-and-spoke pattern, where:</p><ul><li>The API server is the hub</li><li>All other components (including nodes) are spokes</li><li>Communication between components generally goes through the API server rather than directly</li></ul><p>This design provides several benefits:</p><ul><li>Simplified security model with a single point of authentication and authorization</li><li>Consistent audit logging of all operations</li><li>Reduced complexity in component interactions</li><li>Better scalability as components don't need to maintain connections to all other components</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Watch-Based Notification</h3><p>Many Kubernetes components use a watch-based notification system to receive updates about changes to resources they care about:</p><ol><li>Components establish a watch connection to the API server for specific resources</li><li>When those resources change, the API server sends notifications to the watching components</li><li>Components react to the changes and update their internal state or take action</li></ol><p>This mechanism is more efficient than polling and allows for near real-time updates. Examples of components using watches include:</p><ul><li>Kubelet watching for changes to pods assigned to its node</li><li>Scheduler watching for newly created pods that need to be assigned to nodes</li><li>Controllers watching for changes to resources they manage</li><li>Custom controllers watching for changes to custom resources</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Cluster Networking</h3><p>Kubernetes networking addresses four primary concerns:</p><ul><li><strong>Container-to-Container communications</strong>: Containers within a Pod share the same network namespace and can communicate using localhost</li><li><strong>Pod-to-Pod communications</strong>: All Pods can communicate with all other Pods without NAT</li><li><strong>Pod-to-Service communications</strong>: Pods can communicate with Services using the Service's stable IP and DNS name</li><li><strong>External-to-Service communications</strong>: External clients can communicate with Services through various mechanisms like NodePort, LoadBalancer, or Ingress</li></ul><p>These networking capabilities are implemented by network plugins that adhere to the Container Network Interface (CNI) specification. Popular CNI plugins include Calico, Flannel, Cilium, and Weave Net.</p>",
    },
    {
      type: "code",
      content:
        '# Check API server connectivity from a node\n$ curl -k https://<control-plane-ip>:6443/healthz\n\n# View kubelet logs to see communication with API server\n$ journalctl -u kubelet | grep "api-server"\n\n# Check kube-proxy logs for service updates\n$ kubectl logs -n kube-system <kube-proxy-pod-name>\n\n# Test Pod-to-Pod communication\n$ kubectl exec -it <pod-name> -- ping <another-pod-ip>\n\n# Test Pod-to-Service communication\n$ kubectl exec -it <pod-name> -- curl <service-name>.<namespace>.svc.cluster.local',
    },
  ],
  resources: [
    {
      title: "Kubernetes Component Communication",
      url: "https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/",
      type: "documentation",
      description: "Official documentation on communication between control plane and nodes.",
    },
    {
      title: "Kubernetes Watch API",
      url: "https://kubernetes.io/docs/reference/using-api/api-concepts/#efficient-detection-of-changes",
      type: "documentation",
      description: "Documentation on the watch-based notification system in Kubernetes.",
    },
    {
      title: "Kubernetes Network Model",
      url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/#the-kubernetes-network-model",
      type: "documentation",
      description: "Documentation on the Kubernetes networking model that enables component communication.",
    },
    {
      title: "Kubernetes API Server Communication",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/access-cluster-api/",
      type: "documentation",
      description: "Guide on accessing the Kubernetes API from within a cluster.",
    },
    {
      title: "Kubernetes Component Configuration",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/",
      type: "documentation",
      description: "Documentation on configuring Kubernetes components for proper communication.",
    },
    {
      title: "Kubernetes Architecture Deep Dive",
      url: "https://www.youtube.com/watch?v=8C_SCDbUJTg",
      type: "video",
      description: "Video explaining how Kubernetes components communicate with each other.",
    },
  ],
}

