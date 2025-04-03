import type { Lesson } from "../../../types"

export const ingressLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes Ingress",
      url: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
      type: "documentation",
      description: "Official documentation on Kubernetes Ingress resources.",
    },
    {
      title: "Ingress Controllers",
      url: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
      type: "documentation",
      description: "Documentation on Ingress controllers in Kubernetes.",
    },
    {
      title: "NGINX Ingress Controller",
      url: "https://kubernetes.github.io/ingress-nginx/",
      type: "documentation",
      description: "Documentation for the NGINX Ingress Controller, one of the most popular Ingress controllers.",
    },
    {
      title: "Traefik",
      url: "https://doc.traefik.io/traefik/providers/kubernetes-ingress/",
      type: "documentation",
      description: "Documentation for Traefik, a modern HTTP reverse proxy and load balancer for Kubernetes.",
    },
    {
      title: "Kubernetes Ingress Tutorial",
      url: "https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/",
      type: "tutorial",
      description: "Tutorial on setting up Ingress on Minikube with the NGINX Ingress Controller.",
    },
    {
      title: "Kubernetes Ingress Deep Dive",
      url: "https://www.youtube.com/watch?v=GhZi4DxaxxE",
      type: "video",
      description: "In-depth video on Kubernetes Ingress and Ingress Controllers.",
    },
    {
      title: "Ingress for TLS",
      url: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
      type: "documentation",
      description: "Documentation on configuring TLS for Ingress in Kubernetes.",
    },
  ],
}

