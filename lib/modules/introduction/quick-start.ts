import type { Lesson } from "../../../types"

export const quickStartLesson: Lesson = {
  slug: "quick-start",
  title: "Quick Start Guide",
  duration: 20,
  content: [
    {
      type: "text",
      content:
        "<h2>Quick Start Guide</h2><p>This guide will help you get started with Kubernetes using Minikube, a tool that runs a single-node Kubernetes cluster on your local machine. We'll walk through installing the necessary tools, starting a cluster, and deploying a simple application.</p>",
    },
    {
      type: "text",
      content:
        "<h3>Prerequisites</h3><p>Before you begin, you'll need:</p><ul><li>A computer with at least 2 CPUs, 2GB of RAM, and 20GB of free disk space</li><li>Internet connection for downloading tools and container images</li><li>Administrative access to install software</li></ul>",
    },
    {
      type: "text",
      content:
        "<h3>Step 1: Install kubectl</h3><p>kubectl is the Kubernetes command-line tool that allows you to run commands against Kubernetes clusters. You'll use kubectl to deploy applications, inspect and manage cluster resources, and view logs.</p>",
    },
    {
      type: "code",
      content:
        '# For macOS using Homebrew\n$ brew install kubectl\n\n# For Windows using Chocolatey\n$ choco install kubernetes-cli\n\n# For Linux\n$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n\n# Verify installation\n$ kubectl version --client',
    },
    {
      type: "text",
      content:
        "<h3>Step 2: Install Minikube</h3><p>Minikube is a tool that makes it easy to run Kubernetes locally. It runs a single-node Kubernetes cluster inside a Virtual Machine (VM) on your laptop.</p>",
    },
    {
      type: "code",
      content:
        "# For macOS using Homebrew\n$ brew install minikube\n\n# For Windows using Chocolatey\n$ choco install minikube\n\n# For Linux\n$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\n$ sudo install minikube-linux-amd64 /usr/local/bin/minikube",
    },
    {
      type: "text",
      content:
        "<h3>Step 3: Start Minikube</h3><p>Now that you have kubectl and Minikube installed, you can start a Kubernetes cluster.</p>",
    },
    {
      type: "code",
      content:
        "# Start Minikube with default settings\n$ minikube start\n\n# Or start with specific resources\n$ minikube start --cpus=4 --memory=8g\n\n# Check status\n$ minikube status\n\n# View the Kubernetes dashboard (opens in browser)\n$ minikube dashboard",
    },
    {
      type: "text",
      content:
        "<h3>Step 4: Deploy a Sample Application</h3><p>Let's deploy a simple Hello World application to your Kubernetes cluster.</p>",
    },
    {
      type: "code",
      content:
        "# Create a deployment\n$ kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4\n\n# View the deployment\n$ kubectl get deployments\n\n# View the pod\n$ kubectl get pods\n\n# View cluster events\n$ kubectl get events\n\n# View kubectl configuration\n$ kubectl config view",
    },
    {
      type: "text",
      content:
        "<h3>Step 5: Expose the Application</h3><p>By default, the Pod is only accessible by its internal IP address within the Kubernetes cluster. To make the hello-node container accessible from outside the Kubernetes virtual network, you have to expose the Pod as a Kubernetes Service.</p>",
    },
    {
      type: "code",
      content:
        "# Expose the deployment as a service\n$ kubectl expose deployment hello-node --type=LoadBalancer --port=8080\n\n# View the service\n$ kubectl get services\n\n# On Minikube, the LoadBalancer type makes the Service accessible through the minikube service command\n$ minikube service hello-node",
    },
    {
      type: "text",
      content: "<h3>Step 6: Clean Up</h3><p>Now you can clean up the resources you created in your cluster:</p>",
    },
    {
      type: "code",
      content:
        "# Delete the service\n$ kubectl delete service hello-node\n\n# Delete the deployment\n$ kubectl delete deployment hello-node\n\n# Stop Minikube\n$ minikube stop\n\n# Optional: Delete the Minikube VM\n$ minikube delete",
    },
    {
      type: "text",
      content:
        "<h3>Next Steps</h3><p>Congratulations! You've deployed your first application on Kubernetes. This is just the beginning of your Kubernetes journey. Here are some suggestions for what to explore next:</p><ul><li>Learn about Kubernetes objects and resources like Pods, Deployments, Services, and ConfigMaps</li><li>Explore Kubernetes YAML files for declarative configuration</li><li>Set up a multi-node Kubernetes cluster using tools like kubeadm or managed Kubernetes services</li><li>Deploy more complex applications with multiple components</li><li>Learn about Helm, the Kubernetes package manager</li></ul>",
    },
  ],
  resources: [
    {
      title: "Kubernetes Basics",
      url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      type: "tutorial",
      description: "Interactive tutorial that teaches Kubernetes basics with a series of hands-on modules.",
    },
    {
      title: "Minikube Documentation",
      url: "https://minikube.sigs.k8s.io/docs/",
      type: "documentation",
      description: "Official documentation for Minikube, a tool for running Kubernetes locally.",
    },
    {
      title: "kubectl Cheat Sheet",
      url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/",
      type: "documentation",
      description: "Quick reference for kubectl commands and common operations.",
    },
    {
      title: "Play with Kubernetes",
      url: "https://labs.play-with-k8s.com/",
      type: "tool",
      description: "Interactive environment for learning Kubernetes without installing anything.",
    },
    {
      title: "Kubernetes Playground",
      url: "https://www.katacoda.com/courses/kubernetes/playground",
      type: "tool",
      description: "Another interactive environment for experimenting with Kubernetes.",
    },
    {
      title: "kind - Kubernetes in Docker",
      url: "https://kind.sigs.k8s.io/",
      type: "tool",
      description: "Tool for running local Kubernetes clusters using Docker container nodes.",
    },
  ],
}

