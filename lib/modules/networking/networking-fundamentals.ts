import type { Lesson } from "../../../types"

export const networkingFundamentalsLesson: Lesson = {
  slug: "networking-fundamentals",
  title: "Kubernetes Networking Fundamentals",
  duration: 25, // Increased duration due to more content
  content: [
    {
      type: "text",
      content:
        "<h2>Kubernetes Networking Fundamentals</h2><p>Kubernetes networking addresses four primary concerns:</p><ul><li>Container-to-Container communications inside Pods</li><li>Pod-to-Pod communications</li><li>Pod-to-Service communications</li><li>External-to-Service communications</li></ul><p>The Kubernetes networking model is designed to be flat and to avoid NAT (Network Address Translation) within the cluster. This simplifies communication but requires careful implementation.</p>",
    },
    {
      type: "diagram",
      diagramId: "k8s-networking",
      content: "",
    },
    {
      type: "text",
      content:
        "<h3>Kubernetes Networking Model</h3><p>The Kubernetes networking model is based on several fundamental requirements:</p><ul><li>All Pods can communicate with all other Pods without NAT</li><li>All Nodes can communicate with all Pods without NAT</li><li>The IP that a Pod sees itself as is the same IP that others see it as</li></ul><p>This model provides a flat network where Pods can communicate directly with each other, regardless of which node they're running on. This simplifies application design but requires more sophisticated network implementations at the infrastructure level.</p><p>Unlike Docker's default networking model, where each container gets an IP address from a private network namespace that's not accessible outside the host without port mapping, Kubernetes takes a different approach. In Kubernetes, Pods receive IP addresses that are routable within the cluster network. This means that every Pod can reach every other Pod using the Pod's IP address, without any NAT or port mapping.</p><p>This networking model is implemented by various network plugins, which we'll discuss later in this lesson.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Container-to-Container Communications</h3><p>Containers within a Pod share the same network namespace, which means they share the same IP address and port space. They can communicate with each other using localhost.</p><p>This shared network namespace enables several patterns:</p><ul><li><strong>Sidecar containers</strong>: Helper containers that enhance the main container. For example, a sidecar might handle logging, monitoring, or data synchronization for the main container.</li><li><strong>Ambassador containers</strong>: Proxy local connections to the outside world. For example, an ambassador container might handle database connection pooling or provide access to a remote service.</li><li><strong>Adapter containers</strong>: Standardize and normalize output. For example, an adapter might transform the output of the main container to conform to a standard format or protocol.</li></ul><p>Since containers in a Pod share the same IP address, they must use different ports if they need to expose services. This is managed through the Pod's container specifications.</p><p>The shared network namespace is implemented using Linux network namespaces. When a Pod is created, Kubernetes creates a network namespace for the Pod, and all containers in the Pod are added to this namespace. This allows the containers to communicate using localhost, just as if they were processes running on the same host.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Pod-to-Pod Communications</h3><p>Every Pod gets its own IP address. Pods can communicate with all other pods in the cluster using these IP addresses. This is called the 'IP-per-pod' model.</p><p>Pod-to-Pod communication works across nodes through a network overlay or underlay, implemented by a Container Network Interface (CNI) plugin. Popular CNI plugins include:</p><ul><li><strong>Calico</strong>: Uses BGP to route packets between nodes. Calico can operate in a pure Layer 3 mode without encapsulation, which provides better performance. It also supports network policies for security.</li><li><strong>Flannel</strong>: Creates a virtual network that gives a subnet to each node. Flannel uses various backends for packet forwarding, including VXLAN, host-gw, and UDP. It's simple to set up but has fewer features than some other plugins.</li><li><strong>Weave Net</strong>: Creates a virtual network that connects containers across multiple nodes. Weave Net uses a mesh overlay network and can encrypt traffic between nodes. It also supports network policies.</li><li><strong>Cilium</strong>: Uses eBPF for networking and security. Cilium provides high-performance networking, observability, and security at the API level rather than just at the network level.</li></ul><p>The CNI plugin is responsible for ensuring that pods on different nodes can communicate with each other, typically by encapsulating packets or using routing rules.</p><p>When a Pod is scheduled to a node, the kubelet calls the CNI plugin to set up the Pod's networking. The CNI plugin assigns an IP address to the Pod and sets up routes so that the Pod can communicate with other Pods in the cluster.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Pod IP Allocation</h3><p>Each node in the cluster is assigned a CIDR block (a range of IP addresses) for pods. When a pod is scheduled to a node, it receives an IP address from that node's CIDR block.</p><p>For example:</p><ul><li>Node 1 might have the CIDR block 10.244.1.0/24</li><li>Node 2 might have the CIDR block 10.244.2.0/24</li></ul><p>A pod scheduled on Node 1 might get the IP 10.244.1.5, while a pod on Node 2 might get 10.244.2.7. The CNI plugin ensures that these pods can communicate with each other despite being on different subnets.</p><p>The CIDR blocks are assigned to nodes by the control plane, specifically by the kube-controller-manager. The controller manager uses the --cluster-cidr flag to specify the overall CIDR range for the cluster, and then assigns a portion of this range to each node.</p><p>The size of the CIDR block assigned to each node depends on the --node-cidr-mask-size flag. For example, if the cluster CIDR is 10.244.0.0/16 and the node CIDR mask size is 24, then each node gets a /24 subnet, which provides 254 IP addresses for Pods.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Network Namespaces</h3><p>Kubernetes uses Linux network namespaces to isolate network resources. Each pod gets its own network namespace, which includes:</p><ul><li>A unique IP address</li><li>A set of ports</li><li>Routing tables</li><li>Network interfaces</li><li>Firewall rules</li></ul><p>Containers within the same pod share this network namespace, which is why they can communicate using localhost. The kubelet and container runtime work together to set up these namespaces and connect them to the node's network.</p><p>Network namespaces are a feature of the Linux kernel that allows for the isolation of network resources. Each namespace has its own network stack, including network interfaces, routing tables, and firewall rules. This isolation ensures that processes in different namespaces can't interfere with each other's network resources.</p><p>In Kubernetes, the network namespace for a Pod is created by the container runtime (e.g., containerd or CRI-O) when the Pod is started. The CNI plugin then configures this namespace with an IP address and routes.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Pod-to-Service Communication</h3><p>While Pods have unique IP addresses, these addresses are ephemeral. When a Pod is restarted or rescheduled, it gets a new IP address. This makes it difficult for other Pods to reliably communicate with a specific Pod.</p><p>Kubernetes solves this problem with Services. A Service provides a stable IP address and DNS name that maps to a set of Pods. When a Pod communicates with a Service, the traffic is load-balanced across the Pods that are part of the Service.</p><p>Services are implemented using kube-proxy, which runs on each node. kube-proxy sets up iptables or IPVS rules to redirect traffic destined for the Service IP to one of the backing Pods.</p><p>There are several types of Services:</p><ul><li><strong>ClusterIP</strong>: Exposes the Service on an internal IP in the cluster. This is the default type.</li><li><strong>NodePort</strong>: Exposes the Service on each Node's IP at a static port.</li><li><strong>LoadBalancer</strong>: Exposes the Service externally using a cloud provider's load balancer.</li><li><strong>ExternalName</strong>: Maps the Service to the contents of the externalName field by returning a CNAME record.</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>External-to-Service Communication</h3><p>External clients need to access services running in the cluster. Kubernetes provides several ways to expose services to external traffic:</p><ul><li><strong>NodePort Services</strong>: Exposes the Service on each Node's IP at a static port. External traffic can access the Service by connecting to any Node's IP address at the NodePort.</li><li><strong>LoadBalancer Services</strong>: Exposes the Service externally using a cloud provider's load balancer. The load balancer directs traffic to the Service.</li><li><strong>Ingress</strong>: Provides HTTP and HTTPS routing to Services based on the requested host or URL path. Ingress can provide SSL termination, name-based virtual hosting, and path-based routing.</li><li><strong>ExternalIPs</strong>: Services can be exposed on an external IP that routes to one or more cluster nodes.</li></ul><p>The choice of which method to use depends on the specific requirements of the application, such as the protocol being used, the need for SSL termination, and the available infrastructure.</p>",
    },
    {
      type: "text",
      content:
        "<h3>DNS for Service Discovery</h3><p>Kubernetes provides a DNS service that assigns DNS names to Services and Pods. This allows applications to discover services using DNS names rather than IP addresses.</p><p>For a Service named 'my-service' in the namespace 'my-ns', the DNS name would be 'my-service.my-ns.svc.cluster.local'. Pods in the same namespace can access the Service simply as 'my-service'.</p><p>DNS-based service discovery is the recommended approach for service-to-service communication within the cluster, as it works for all services regardless of when they were created relative to client pods.</p><p>The DNS service in Kubernetes is implemented as a cluster add-on, typically using CoreDNS. CoreDNS runs as a Deployment in the kube-system namespace and is configured to serve DNS records for Services and Pods in the cluster.</p>",
    },
    {
      type: "code",
      content:
        "# View pod IP addresses\n$ kubectl get pods -o wide\n\n# Test connectivity between pods\n$ kubectl exec -it pod1 -- ping <pod2-ip>\n\n# Examine network interfaces in a pod\n$ kubectl exec -it pod1 -- ip addr\n\n# View node CIDR allocations\n$ kubectl get nodes -o jsonpath='{.items[*].spec.podCIDR}'\n\n# Check which CNI plugin is being used\n$ ls /etc/cni/net.d/\n\n# View CNI configuration\n$ cat /etc/cni/net.d/10-flannel.conflist\n\n# Test DNS resolution within a pod\n$ kubectl exec -it pod1 -- nslookup kubernetes.default.svc.cluster.local\n\n# View services in the cluster\n$ kubectl get services\n\n# Test connectivity to a service\n$ kubectl exec -it pod1 -- curl <service-name>",
    },
  ],
  resources: [
    {
      title: "Kubernetes Networking",
      url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
      type: "documentation",
      description: "Official Kubernetes documentation on cluster networking.",
    },
    {
      title: "Kubernetes Networking Guide for Beginners",
      url: "https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-networking-guide-beginners.html",
      type: "article",
      description: "A beginner-friendly guide to understanding Kubernetes networking concepts.",
    },
    {
      title: "Kubernetes Networking Deep Dive",
      url: "https://www.youtube.com/watch?v=tq9ng_Nz9j8",
      type: "video",
      description: "A comprehensive video explaining Kubernetes networking in depth.",
    },
    {
      title: "Container Network Interface (CNI) Specification",
      url: "https://github.com/containernetworking/cni/blob/master/SPEC.md",
      type: "github",
      description: "The official specification for the Container Network Interface (CNI).",
    },
    {
      title: "Calico",
      url: "https://www.projectcalico.org/",
      type: "tool",
      description: "A popular CNI plugin that provides networking and network policy for Kubernetes.",
    },
    {
      title: "Flannel",
      url: "https://github.com/flannel-io/flannel",
      type: "github",
      description: "A simple and easy to use CNI plugin for Kubernetes.",
    },
  ],
}

