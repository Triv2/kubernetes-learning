import type { Lesson } from "../../../types"

export const servicesLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes Services",
      url: "https://kubernetes.io/docs/concepts/services-networking/service/",
      type: "documentation",
      description: "Official documentation on Kubernetes Services.",
    },
    {
      title: "Service Types",
      url: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
      type: "documentation",
      description: "Documentation on different types of Services in Kubernetes.",
    },
    {
      title: "Kubernetes Service Discovery",
      url: "https://kubernetes.io/docs/concepts/services-networking/service/#discovering-services",
      type: "documentation",
      description: "Documentation on service discovery mechanisms in Kubernetes.",
    },
    {
      title: "Kubernetes Services Deep Dive",
      url: "https://www.youtube.com/watch?v=NFApeJRXos4",
      type: "video",
      description: "In-depth video on Kubernetes Services and how they work.",
    },
    {
      title: "Kubernetes Services Explained",
      url: "https://matthewpalmer.net/kubernetes-app-developer/articles/service-kubernetes-example-tutorial.html",
      type: "tutorial",
      description: "Tutorial explaining Kubernetes Services with examples.",
    },
    {
      title: "Headless Services",
      url: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
      type: "documentation",
      description: "Documentation on headless Services in Kubernetes for direct pod access.",
    },
    {
      title: "ExternalName Services",
      url: "https://kubernetes.io/docs/concepts/services-networking/service/#externalname",
      type: "documentation",
      description: "Documentation on ExternalName Services for mapping Services to external names.",
    },
  ],
}

