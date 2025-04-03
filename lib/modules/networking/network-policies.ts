import type { Lesson } from "../../../types"

export const networkPoliciesLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes Network Policies",
      url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
      type: "documentation",
      description: "Official documentation on Kubernetes Network Policies.",
    },
    {
      title: "Network Policy Examples",
      url: "https://github.com/ahmetb/kubernetes-network-policy-recipes",
      type: "github",
      description: "Collection of Kubernetes Network Policy examples for various common scenarios.",
    },
    {
      title: "Calico Network Policies",
      url: "https://docs.projectcalico.org/security/network-policy",
      type: "documentation",
      description: "Documentation on network policies in Calico, a popular CNI plugin.",
    },
    {
      title: "Kubernetes Network Policy Tutorial",
      url: "https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy/",
      type: "tutorial",
      description: "Tutorial on declaring network policies in Kubernetes.",
    },
    {
      title: "Network Policy Editor",
      url: "https://editor.cilium.io/",
      type: "tool",
      description: "Interactive editor for creating and visualizing Kubernetes Network Policies.",
    },
    {
      title: "Kubernetes Network Policies Deep Dive",
      url: "https://www.youtube.com/watch?v=3gGpMmYeEO8",
      type: "video",
      description: "In-depth video on Kubernetes Network Policies and how they work.",
    },
    {
      title: "Securing Kubernetes Networking with Network Policies",
      url: "https://kubernetes.io/blog/2017/10/enforcing-network-policies-in-kubernetes/",
      type: "article",
      description: "Blog post on enforcing network policies in Kubernetes.",
    },
  ],
}

