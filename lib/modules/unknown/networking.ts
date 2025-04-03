import type { Module } from "../types"

export const networkingModule: Module = {
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
  lessons: [
    {
      slug: "networking-fundamentals",
      title: "Kubernetes Networking Fundamentals",
      duration: 18,
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
            "<h3>Kubernetes Networking Model</h3><p>The Kubernetes networking model is based on several fundamental requirements:</p><ul><li>All Pods can communicate with all other Pods without NAT</li><li>All Nodes can communicate with all Pods without NAT</li><li>The IP that a Pod sees itself as is the same IP that others see it as</li></ul><p>This model provides a flat network where Pods can communicate directly with each other, regardless of which node they're running on. This simplifies application design but requires more sophisticated network implementations at the infrastructure level.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Container-to-Container Communications</h3><p>Containers within a Pod share the same network namespace, which means they share the same IP address and port space. They can communicate with each other using localhost.</p><p>This shared network namespace enables several patterns:</p><ul><li><strong>Sidecar containers</strong>: Helper containers that enhance the main container</li><li><strong>Ambassador containers</strong>: Proxy local connections to the outside world</li><li><strong>Adapter containers</strong>: Standardize and normalize output</li></ul><p>Since containers in a Pod share the same IP address, they must use different ports if they need to expose services. This is managed through the Pod's container specifications.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Pod-to-Pod Communications</h3><p>Every Pod gets its own IP address. Pods can communicate with all other pods in the cluster using these IP addresses. This is called the 'IP-per-pod' model.</p><p>Pod-to-Pod communication works across nodes through a network overlay or underlay, implemented by a Container Network Interface (CNI) plugin. Popular CNI plugins include:</p><ul><li><strong>Calico</strong>: Uses BGP to route packets between nodes</li><li><strong>Flannel</strong>: Creates a virtual network that gives a subnet to each node</li><li><strong>Weave Net</strong>: Creates a virtual network that connects containers across multiple nodes</li><li><strong>Cilium</strong>: Uses eBPF for networking and security</li></ul><p>The CNI plugin is responsible for ensuring that pods on different nodes can communicate with each other, typically by encapsulating packets or using routing rules.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Pod IP Allocation</h3><p>Each node in the cluster is assigned a CIDR block (a range of IP addresses) for pods. When a pod is scheduled to a node, it receives an IP address from that node's CIDR block.</p><p>For example:</p><ul><li>Node 1 might have the CIDR block 10.244.1.0/24</li><li>Node 2 might have the CIDR block 10.244.2.0/24</li></ul><p>A pod scheduled on Node 1 might get the IP 10.244.1.5, while a pod on Node 2 might get 10.244.2.7. The CNI plugin ensures that these pods can communicate with each other despite being on different subnets.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Network Namespaces</h3><p>Kubernetes uses Linux network namespaces to isolate network resources. Each pod gets its own network namespace, which includes:</p><ul><li>A unique IP address</li><li>A set of ports</li><li>Routing tables</li><li>Network interfaces</li><li>Firewall rules</li></ul><p>Containers within the same pod share this network namespace, which is why they can communicate using localhost. The kubelet and container runtime work together to set up these namespaces and connect them to the node's network.</p>",
        },
        {
          type: "code",
          content:
            "# View pod IP addresses\n$ kubectl get pods -o wide\n\n# Test connectivity between pods\n$ kubectl exec -it pod1 -- ping <pod2-ip>\n\n# Examine network interfaces in a pod\n$ kubectl exec -it pod1 -- ip addr\n\n# View node CIDR allocations\n$ kubectl get nodes -o jsonpath='{.items[*].spec.podCIDR}'\n\n# Check which CNI plugin is being used\n$ ls /etc/cni/net.d/\n\n# View CNI configuration\n$ cat /etc/cni/net.d/10-flannel.conflist",
        },
      ],
    },
    {
      slug: "services",
      title: "Kubernetes Services",
      duration: 20,
      content: [
        {
          type: "text",
          content:
            "<h2>Kubernetes Services</h2><p>A Service is an abstraction which defines a logical set of Pods and a policy by which to access them. Services enable loose coupling between dependent Pods and solve several critical problems in a microservices architecture:</p><ul><li>Pod IP addresses are ephemeral and change when pods are rescheduled</li><li>Sets of pods providing the same functionality need load balancing</li><li>Applications need a stable endpoint to connect to backend services</li></ul><p>Services provide a stable IP address, DNS name, and port that remains constant even as the underlying pods change.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Service Discovery</h3><p>Kubernetes supports two primary modes of service discovery:</p><ul><li><strong>Environment Variables</strong>: When a Pod is run on a Node, the kubelet adds a set of environment variables for each active Service. This is simple but has limitations.</li><li><strong>DNS</strong>: Kubernetes DNS assigns a DNS name to each service in the format <service-name>.<namespace>.svc.cluster.local, which resolves to the cluster IP of the service.</li></ul><p>DNS-based service discovery is the recommended approach as it works for all services regardless of when they were created relative to client pods.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Service Types</h3><ul><li><strong>ClusterIP (default)</strong>: Exposes the Service on an internal IP in the cluster. This makes the Service only reachable from within the cluster.</li><li><strong>NodePort</strong>: Exposes the Service on the same port of each selected Node using NAT. Makes a Service accessible from outside the cluster using &lt;NodeIP&gt;:&lt;NodePort&gt;. Superset of ClusterIP.</li><li><strong>LoadBalancer</strong>: Creates an external load balancer in the cloud provider and assigns a fixed, external IP to the Service. Superset of NodePort.</li><li><strong>ExternalName</strong>: Maps the Service to the contents of the externalName field (e.g., foo.bar.example.com), by returning a CNAME record. No proxying of any kind is set up.</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Service Implementation</h3><p>Services are implemented by kube-proxy, which runs on every node. kube-proxy watches the Kubernetes API server for new Services and endpoints, and updates the node's iptables or IPVS rules to route traffic to the appropriate pods.</p><p>kube-proxy operates in one of three modes:</p><ul><li><strong>userspace</strong> (legacy): Traffic is proxied through a userspace process</li><li><strong>iptables</strong> (default): Uses iptables rules to redirect traffic</li><li><strong>IPVS</strong> (IP Virtual Server): For clusters with a large number of Services, provides better performance and more load balancing algorithms</li></ul><p>When a client connects to a Service's cluster IP, the connection is routed to one of the Service's backend pods based on the load balancing algorithm.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Endpoints and EndpointSlices</h3><p>For each Service, Kubernetes creates an Endpoints object (or EndpointSlices in newer versions) that tracks the IP addresses of the pods that match the Service's selector.</p><p>When a Service is created or updated:</p><ol><li>The Service controller identifies pods that match the Service's selector</li><li>It creates or updates the Endpoints/EndpointSlices with the IPs of those pods</li><li>kube-proxy watches for changes to Endpoints/EndpointSlices</li><li>kube-proxy updates the node's iptables or IPVS rules to route traffic to the current set of pods</li></ol><p>This mechanism ensures that traffic to a Service is always directed to healthy, running pods, even as pods are created, deleted, or rescheduled.</p>",
        },
        {
          type: "text",
          content:
            '<h3>Headless Services</h3><p>Sometimes you don\'t need load balancing and a single Service IP. In this case, you can create a "headless" Service by specifying "None" for the cluster IP (.spec.clusterIP).</p><p>For headless Services:</p><ul><li>No cluster IP is allocated</li><li>DNS returns the IP addresses of the pods directly</li><li>Clients connect directly to the pods rather than through a proxy</li></ul><p>Headless Services are useful for stateful applications where clients need to connect to specific pods, such as database clusters where each pod has a unique role (e.g., primary and replicas).</p>',
        },
        {
          type: "code",
          content:
            "# Example of a ClusterIP Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - port: 80\n    targetPort: 9376\n  type: ClusterIP\n\n# Example of a NodePort Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-nodeport-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - port: 80\n    targetPort: 9376\n    nodePort: 30007  # Optional, Kubernetes will allocate one if not specified\n  type: NodePort\n\n# Example of a LoadBalancer Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-loadbalancer\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - port: 80\n    targetPort: 9376\n  type: LoadBalancer\n\n# Example of a Headless Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-headless-service\nspec:\n  selector:\n    app: MyApp\n  ports:\n  - port: 80\n    targetPort: 9376\n  clusterIP: None",
        },
      ],
    },
    {
      slug: "ingress",
      title: "Ingress and Ingress Controllers",
      duration: 18,
      content: [
        {
          type: "text",
          content:
            "<h2>Ingress and Ingress Controllers</h2><p>Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.</p><p>An Ingress may provide:</p><ul><li>Load balancing</li><li>SSL termination</li><li>Name-based virtual hosting</li><li>Path-based routing</li><li>TLS/SSL encryption</li></ul><p>Ingress is particularly useful for exposing multiple services under a single IP address, which can save costs and simplify DNS management.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Ingress Resource</h3><p>An Ingress resource defines rules for routing external HTTP/HTTPS traffic to internal services. It's a Kubernetes API object that you create like any other resource.</p><p>A simple Ingress might route traffic to different services based on the requested host or URL path:</p><ul><li>foo.example.com → service-foo</li><li>bar.example.com → service-bar</li><li>example.com/foo → service-foo</li><li>example.com/bar → service-bar</li></ul><p>Ingress resources support various features depending on the Ingress controller, including:</p><ul><li>Path-based routing</li><li>Host-based routing</li><li>TLS/SSL termination</li><li>Rewriting URLs</li><li>Rate limiting</li><li>Authentication</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Ingress Controllers</h3><p>For the Ingress resource to work, the cluster must have an ingress controller running. Unlike other types of controllers which run as part of the kube-controller-manager binary, Ingress controllers are not started automatically with a cluster.</p><p>Some popular Ingress controllers include:</p><ul><li><strong>Nginx Ingress Controller</strong>: Based on the Nginx web server and proxy</li><li><strong>Traefik</strong>: A modern HTTP reverse proxy and load balancer</li><li><strong>HAProxy Ingress</strong>: Based on the HAProxy load balancer</li><li><strong>Istio Ingress Gateway</strong>: Part of the Istio service mesh</li><li><strong>Kong Ingress Controller</strong>: Based on the Kong API gateway</li><li><strong>AWS ALB Ingress Controller</strong>: Uses AWS Application Load Balancers</li></ul><p>Each Ingress controller has its own features and configuration options. You choose an Ingress controller based on your specific requirements for features, performance, and integration with your infrastructure.</p>",
        },
        {
          type: "text",
          content:
            "<h3>How Ingress Works</h3><p>The typical flow for Ingress traffic is:</p><ol><li>External traffic arrives at a load balancer or directly to a node</li><li>Traffic is routed to the Ingress controller</li><li>The Ingress controller examines the request (host, path, headers, etc.)</li><li>Based on the Ingress rules, the controller routes the request to the appropriate service</li><li>The service routes the request to a pod</li></ol><p>The Ingress controller continuously watches for changes to Ingress resources and updates its configuration accordingly. This allows for dynamic reconfiguration without downtime.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Ingress Annotations</h3><p>Ingress controllers typically support additional configuration through annotations on the Ingress resource. These annotations allow you to configure features specific to the Ingress controller you're using.</p><p>For example, with the Nginx Ingress controller, you might use annotations to:</p><ul><li>Configure SSL/TLS settings</li><li>Set up rate limiting</li><li>Configure CORS headers</li><li>Enable WebSocket support</li><li>Configure authentication</li></ul><p>Annotations are specific to each Ingress controller, so you'll need to consult the documentation for your chosen controller to understand the available options.</p>",
        },
        {
          type: "code",
          content:
            "# Example of an Ingress resource\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: minimal-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  ingressClassName: nginx\n  rules:\n  - host: foo.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: service-foo\n            port:\n              number: 80\n  - host: bar.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: service-bar\n            port:\n              number: 80\n  # TLS configuration\n  tls:\n  - hosts:\n    - foo.example.com\n    - bar.example.com\n    secretName: example-tls-secret\n\n# Install Nginx Ingress Controller with Helm\n$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n$ helm repo update\n$ helm install ingress-nginx ingress-nginx/ingress-nginx\n\n# Create a TLS secret for HTTPS\n$ kubectl create secret tls example-tls-secret --key tls.key --cert tls.crt",
        },
      ],
    },
    {
      slug: "network-policies",
      title: "Network Policies",
      duration: 15,
      content: [
        {
          type: "text",
          content:
            "<h2>Network Policies</h2><p>A NetworkPolicy is a specification of how groups of pods are allowed to communicate with each other and other network endpoints. NetworkPolicies are implemented by a network plugin, so you must be using a networking solution which supports NetworkPolicy (like Calico, Cilium, or Weave Net).</p><p>By default, pods in a Kubernetes cluster are non-isolated; they accept traffic from any source. Network policies allow you to restrict this communication, providing security similar to a firewall.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Key Concepts</h3><ul><li><strong>Pods</strong>: The pods to which the NetworkPolicy applies, selected using pod selectors</li><li><strong>Namespaces</strong>: The namespaces to which the NetworkPolicy applies, selected using namespace selectors</li><li><strong>Ingress</strong>: The rules for incoming traffic to the selected pods</li><li><strong>Egress</strong>: The rules for outgoing traffic from the selected pods</li></ul><p>Network policies are additive, meaning that if multiple policies select the same pod, the pod is restricted by the union of those policies' ingress/egress rules. Thus, order of evaluation does not affect the policy result.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Policy Types</h3><p>A NetworkPolicy can specify policy types, which determine whether the policy applies to ingress, egress, or both:</p><ul><li><strong>Ingress</strong>: Controls incoming traffic to selected pods</li><li><strong>Egress</strong>: Controls outgoing traffic from selected pods</li></ul><p>If no policyTypes are specified, by default an ingress policy is created, and if any egress rules are also specified, an egress policy is created.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Selectors</h3><p>NetworkPolicies use selectors to determine which pods and namespaces they apply to:</p><ul><li><strong>podSelector</strong>: Selects the pods to which the policy applies</li><li><strong>namespaceSelector</strong>: Selects the namespaces to which the policy applies</li></ul><p>These selectors use label matching, just like other Kubernetes resources. You can select pods based on their labels, and you can select namespaces based on their labels.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Rules</h3><p>NetworkPolicy rules define the specific traffic that is allowed:</p><ul><li><strong>from</strong>: Specifies sources that are allowed for ingress traffic</li><li><strong>to</strong>: Specifies destinations that are allowed for egress traffic</li></ul><p>Each rule can specify:</p><ul><li><strong>podSelector</strong>: Allows traffic from/to pods with matching labels</li><li><strong>namespaceSelector</strong>: Allows traffic from/to pods in namespaces with matching labels</li><li><strong>ipBlock</strong>: Allows traffic from/to specific IP CIDR ranges</li></ul><p>Rules can also specify ports to allow traffic on specific protocols and port numbers.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Default Policies</h3><p>A common pattern is to define default deny policies for a namespace, and then add more permissive policies for specific communications:</p><ul><li><strong>Default deny all ingress</strong>: Prevents all incoming traffic to pods in a namespace</li><li><strong>Default deny all egress</strong>: Prevents all outgoing traffic from pods in a namespace</li><li><strong>Default allow all ingress</strong>: Allows all incoming traffic to pods in a namespace (this is the default if no policies exist)</li><li><strong>Default allow all egress</strong>: Allows all outgoing traffic from pods in a namespace (this is the default if no policies exist)</li></ul><p>After setting up default policies, you can add more specific policies to allow necessary traffic.</p>",
        },
        {
          type: "code",
          content:
            "# Example of a NetworkPolicy that allows ingress traffic from a specific pod\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-from-frontend\n  namespace: default\nspec:\n  podSelector:\n    matchLabels:\n      app: backend\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: frontend\n    ports:\n    - protocol: TCP\n      port: 80\n\n# Example of a NetworkPolicy that denies all ingress traffic\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-ingress\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n\n# Example of a NetworkPolicy that allows egress traffic to specific IPs\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-egress-to-specific-ips\nspec:\n  podSelector:\n    matchLabels:\n      app: frontend\n  policyTypes:\n  - Egress\n  egress:\n  - to:\n    - ipBlock:\n        cidr: 10.0.0.0/24\n    ports:\n    - protocol: TCP\n      port: 443",
        },
      ],
    },
    {
      slug: "dns",
      title: "DNS in Kubernetes",
      duration: 15,
      content: [
        {
          type: "text",
          content:
            "<h2>DNS in Kubernetes</h2><p>Kubernetes creates DNS records for Services and Pods. You can contact Services with consistent DNS names instead of IP addresses. This is essential for service discovery in a dynamic environment where pods and services come and go.</p><p>DNS is implemented as a Kubernetes service that schedules a DNS Pod on the cluster, and configures the kubelets to tell individual containers to use the DNS service's IP to resolve DNS names.</p>",
        },
        {
          type: "text",
          content:
            "<h3>Services</h3><p>For a Service named 'my-service' in the namespace 'my-ns', the control plane creates a DNS record: my-service.my-ns. Pods in the same namespace can access the service simply as 'my-service'.</p><p>The full DNS pattern for services is:</p><pre>service-name.namespace-name.svc.cluster-domain.example</pre><p>Where:</p><ul><li><strong>service-name</strong> is the name of the service</li><li><strong>namespace-name</strong> is the namespace of the service</li><li><strong>svc</strong> indicates this is a service</li><li><strong>cluster-domain.example</strong> is the cluster domain, typically 'cluster.local'</li></ul><p>For example, a service named 'web' in the 'frontend' namespace would have the DNS name: web.frontend.svc.cluster.local</p>",
        },
        {
          type: "text",
          content:
            "<h3>Pods</h3><p>For a Pod with IP 1.2.3.4 in the namespace 'my-ns', the control plane creates a DNS record: 1-2-3-4.my-ns.pod.cluster.local.</p><p>The full DNS pattern for pods is:</p><pre>pod-ip-address.namespace-name.pod.cluster-domain.example</pre><p>Where:</p><ul><li><strong>pod-ip-address</strong> is the pod's IP address with dots replaced by hyphens</li><li><strong>namespace-name</strong> is the namespace of the pod</li><li><strong>pod</strong> indicates this is a pod</li><li><strong>cluster-domain.example</strong> is the cluster domain</li></ul><p>For example, a pod with IP 10.244.1.5 in the 'backend' namespace would have the DNS name: 10-244-1-5.backend.pod.cluster.local</p>",
        },
        {
          type: "text",
          content:
            "<h3>DNS Policies</h3><p>DNS policies can be set on a per-pod basis. The following policies are supported:</p><ul><li><strong>Default</strong>: The Pod inherits the name resolution configuration from the node</li><li><strong>ClusterFirst</strong>: Any DNS query that does not match the cluster domain suffix is forwarded to the upstream nameserver</li><li><strong>ClusterFirstWithHostNet</strong>: For Pods running with hostNetwork</li><li><strong>None</strong>: All DNS settings are provided using the dnsConfig field</li></ul><p>The DNS policy is specified in the pod spec:</p><pre>spec:\n  dnsPolicy: ClusterFirst</pre>",
        },
        {
          type: "text",
          content:
            "<h3>DNS Configuration</h3><p>The Pod's DNS config can be customized using the dnsConfig field. This allows you to:</p><ul><li>Specify additional nameservers</li><li>Add search domains</li><li>Add custom DNS options</li></ul><p>This is particularly useful when you need to resolve names that are not part of the cluster domain, or when you need to customize DNS resolution for specific pods.</p>",
        },
        {
          type: "text",
          content:
            "<h3>CoreDNS</h3><p>CoreDNS is the default DNS server for Kubernetes. It's a flexible, extensible DNS server that can serve as the Kubernetes cluster DNS.</p><p>CoreDNS is configured through a Corefile, which defines how DNS queries are processed. The default configuration includes:</p><ul><li>Forwarding queries for the cluster domain to the Kubernetes API</li><li>Forwarding other queries to upstream DNS servers</li><li>Caching responses to improve performance</li><li>Health checking to ensure the DNS server is functioning properly</li></ul><p>You can customize CoreDNS by modifying its ConfigMap in the kube-system namespace.</p>",
        },
        {
          type: "code",
          content:
            '# View DNS service in the cluster\n$ kubectl get service -n kube-system kube-dns\n\n# View CoreDNS pods\n$ kubectl get pods -n kube-system -l k8s-app=kube-dns\n\n# View CoreDNS configuration\n$ kubectl get configmap -n kube-system coredns -o yaml\n\n# Test DNS resolution from a pod\n$ kubectl run -it --rm debug --image=busybox -- nslookup kubernetes.default.svc.cluster.local\n\n# Example Pod with custom DNS configuration\napiVersion: v1\nkind: Pod\nmetadata:\n  name: custom-dns-pod\nspec:\n  containers:\n  - name: dns-example\n    image: nginx\n  dnsPolicy: "None"\n  dnsConfig:\n    nameservers:\n    - 8.8.8.8\n    searches:\n    - example.com\n    options:\n    - name: ndots\n      value: "5"',
        },
      ],
    },
    {
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
    },
  ],
}

