import type { Lesson } from "../../../types"

export const dnsLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes DNS for Services and Pods",
      url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
      type: "documentation",
      description: "Official documentation on DNS for service discovery in Kubernetes.",
    },
    {
      title: "CoreDNS",
      url: "https://coredns.io/",
      type: "documentation",
      description: "Documentation for CoreDNS, the default DNS server in Kubernetes.",
    },
    {
      title: "Customizing DNS Service",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
      type: "documentation",
      description: "Documentation on customizing the DNS service in Kubernetes.",
    },
    {
      title: "Debugging DNS Resolution",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
      type: "tutorial",
      description: "Tutorial on debugging DNS resolution issues in Kubernetes.",
    },
    {
      title: "DNS Autoscaling",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-horizontal-autoscaling/",
      type: "documentation",
      description: "Documentation on DNS horizontal autoscaling in Kubernetes.",
    },
    {
      title: "Kubernetes DNS Deep Dive",
      url: "https://www.youtube.com/watch?v=qRPNuT080Hk",
      type: "video",
      description: "In-depth video on DNS in Kubernetes and how it works.",
    },
  ],
}

