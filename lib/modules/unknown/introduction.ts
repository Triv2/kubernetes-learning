import type { Module } from "../types"

export const introductionModule: Module = {
  slug: "introduction",
  title: "Introduction to Kubernetes",
  description: "Learn the fundamentals of Kubernetes, its history, architecture, and real-world applications",
  level: "beginner",
  learningObjectives: [
    "Understand what Kubernetes is and the problems it solves in modern application deployment",
    "Learn about the history and evolution of Kubernetes from Borg to CNCF",
    "Explore common use cases and implementation patterns for Kubernetes in production",
    "Understand the benefits, challenges, and limitations of Kubernetes adoption",
    "Set up a basic Kubernetes environment using Minikube and kubectl",
    "Learn essential Kubernetes terminology and concepts",
  ],
  lessons: [
    {
      slug: "what-is-kubernetes",
      title: "What is Kubernetes?",
      duration: 12,
      content: [
        {
          type: "text",
          content:
            "<h2>What is Kubernetes?</h2><p>Kubernetes (K8s) is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.</p><p>Kubernetes builds upon 15 years of experience of running production workloads at Google, combined with best-of-breed ideas and practices from the community.</p><p>At its core, Kubernetes provides a container-centric management environment. It orchestrates computing, networking, and storage infrastructure on behalf of user workloads. This provides much of the simplicity of Platform as a Service (PaaS) with the flexibility of Infrastructure as a Service (IaaS).</p>",
        },
        {
          type: "diagram",
          diagramId: "k8s-architecture",
          content: "",
        },
        {
          type: "text",
          content:
            "<h3>Key Features</h3><ul><li><strong>Service discovery and load balancing</strong>: Kubernetes can expose a container using the DNS name or using their own IP address. If traffic to a container is high, Kubernetes is able to load balance and distribute the network traffic so that the deployment is stable.</li><li><strong>Storage orchestration</strong>: Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more.</li><li><strong>Automated rollouts and rollbacks</strong>: You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate.</li><li><strong>Self-healing</strong>: Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.</li><li><strong>Secret and configuration management</strong>: Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration.</li><li><strong>Automatic bin packing</strong>: You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources.</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>What Kubernetes Is Not</h3><p>Kubernetes is not a traditional, all-inclusive PaaS (Platform as a Service) system. It operates at the container level rather than at the hardware level, providing some generally applicable features common to PaaS offerings, such as deployment, scaling, and load balancing. However, Kubernetes is not monolithic, and these default solutions are optional and pluggable.</p><p>Kubernetes:</p><ul><li>Does not limit the types of applications supported. If an application can run in a container, it should run great on Kubernetes.</li><li>Does not deploy source code and does not build your application. Continuous Integration, Delivery, and Deployment (CI/CD) workflows are determined by organization cultures and preferences as well as technical requirements.</li><li>Does not provide application-level services, such as middleware, data-processing frameworks, databases, caches, nor cluster storage systems as built-in services.</li><li>Does not dictate logging, monitoring, or alerting solutions. It provides some integrations as proof of concept, and mechanisms to collect and export metrics.</li><li>Does not provide nor mandate a configuration language/system. It provides a declarative API that may be targeted by arbitrary forms of declarative specifications.</li></ul>",
        },
      ],
    },
    {
      slug: "kubernetes-history",
      title: "History and Evolution of Kubernetes",
      duration: 10,
      content: [
        {
          type: "text",
          content:
            "<h2>History and Evolution of Kubernetes</h2><p>Kubernetes was originally developed by Google, based on their experience running containers in production with an internal system called Borg. The first version was released in 2015, and it has since become one of the most popular container orchestration platforms.</p><p>Google donated Kubernetes to the Cloud Native Computing Foundation (CNCF) in 2014, which now maintains the project as an open-source community effort.</p>",
        },
        {
          type: "text",
          content:
            "<h3>From Borg to Kubernetes</h3><p>Google's internal container management system, Borg, was the predecessor to Kubernetes. Borg was designed to manage thousands of applications across clusters with up to tens of thousands of machines. Many of the developers who worked on Borg became key contributors to the Kubernetes project.</p><p>The lessons learned from developing and operating Borg over a decade influenced many aspects of Kubernetes design:</p><ul><li>API servers as the central control plane</li><li>Pods as the basic unit of deployment</li><li>IP-per-Pod networking model</li><li>Services and labels for service discovery</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Timeline</h3><ul><li><strong>2003-2004</strong>: Google develops the Borg system internally</li><li><strong>2013</strong>: Google begins work on Kubernetes as an open-source version of Borg</li><li><strong>June 2014</strong>: Kubernetes project announced by Google at DockerCon</li><li><strong>July 2015</strong>: Kubernetes 1.0 released and donated to the CNCF</li><li><strong>March 2016</strong>: Kubernetes 1.2 released with support for deployments and ingress</li><li><strong>2016-2017</strong>: Major cloud providers begin offering managed Kubernetes services (GKE, AKS, EKS)</li><li><strong>2017</strong>: Kubernetes becomes the de facto standard for container orchestration</li><li><strong>2018</strong>: Docker announces support for Kubernetes in Docker Enterprise</li><li><strong>2019</strong>: Kubernetes graduates from CNCF, signifying its maturity and stability</li><li><strong>2020-Present</strong>: Continuous improvements, with a focus on security, stability, and extensibility</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Community Growth</h3><p>The Kubernetes community has grown exponentially since its inception. It is now one of the largest open-source projects in the world, with thousands of contributors from hundreds of organizations. The project follows a governance model with Special Interest Groups (SIGs) focused on different aspects of the system.</p><p>The CNCF ecosystem has also grown around Kubernetes, with many complementary projects addressing monitoring, service mesh, security, and other aspects of cloud-native applications.</p>",
        },
      ],
    },
    {
      slug: "kubernetes-use-cases",
      title: "Common Use Cases for Kubernetes",
      duration: 15,
      content: [
        {
          type: "text",
          content:
            "<h2>Common Use Cases for Kubernetes</h2><p>Kubernetes is used in a wide variety of scenarios, from small startups to large enterprises. Here are some common use cases and real-world applications:</p>",
        },
        {
          type: "text",
          content:
            "<h3>Microservices Architecture</h3><p>Kubernetes provides the infrastructure needed to deploy applications based on microservices architecture. It handles service discovery, load balancing, and scaling for microservices.</p><p><strong>Example:</strong> An e-commerce platform might decompose its application into microservices for user authentication, product catalog, shopping cart, payment processing, and order management. Each microservice can be deployed, scaled, and updated independently using Kubernetes.</p><p><strong>Benefits:</strong></p><ul><li>Independent scaling of services based on demand</li><li>Isolation of failures to specific services</li><li>Ability to use different technologies for different services</li><li>Simplified continuous deployment of individual services</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Hybrid and Multi-Cloud Deployments</h3><p>Kubernetes allows organizations to run applications across multiple cloud providers or in hybrid environments (on-premises and cloud), providing consistency and portability.</p><p><strong>Example:</strong> A financial services company might run its core banking applications on-premises for security and compliance reasons, while deploying customer-facing applications in the public cloud for scalability. Kubernetes provides a consistent platform across both environments.</p><p><strong>Benefits:</strong></p><ul><li>Avoid vendor lock-in by being able to move workloads between cloud providers</li><li>Optimize costs by running workloads on the most cost-effective infrastructure</li><li>Improve resilience by distributing applications across multiple regions or providers</li><li>Maintain a consistent deployment and management experience across environments</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Continuous Integration/Continuous Deployment (CI/CD)</h3><p>Kubernetes integrates well with CI/CD pipelines, enabling automated testing and deployment of applications.</p><p><strong>Example:</strong> A software development team can set up a CI/CD pipeline that automatically builds container images, runs tests, and deploys to a Kubernetes cluster. They can use features like rolling updates and canary deployments to safely release new versions.</p><p><strong>Benefits:</strong></p><ul><li>Automated deployment process reduces human error</li><li>Rolling updates minimize downtime during deployments</li><li>Easy rollback to previous versions if issues are detected</li><li>Canary deployments allow testing with a subset of users before full release</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Batch Processing and Big Data</h3><p>Kubernetes can be used to schedule and run batch jobs and big data processing workloads efficiently.</p><p><strong>Example:</strong> A data analytics company might use Kubernetes to run distributed data processing jobs using frameworks like Spark or Flink. They can schedule jobs to run during off-peak hours and scale resources based on job requirements.</p><p><strong>Benefits:</strong></p><ul><li>Efficient resource utilization by packing jobs onto available nodes</li><li>Automatic scaling of resources based on job requirements</li><li>Job scheduling with dependencies and priorities</li><li>Integration with data processing frameworks and tools</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Machine Learning and AI</h3><p>Kubernetes is increasingly used for deploying and managing machine learning workloads, from training to inference.</p><p><strong>Example:</strong> A company developing computer vision models might use Kubernetes to orchestrate GPU-accelerated training jobs and deploy trained models as scalable inference services.</p><p><strong>Benefits:</strong></p><ul><li>Efficient utilization of specialized hardware like GPUs</li><li>Scaling of inference services based on demand</li><li>Versioning and A/B testing of models</li><li>Integration with ML frameworks and tools</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Edge Computing</h3><p>Kubernetes is being adapted for edge computing scenarios, where applications run closer to where data is generated.</p><p><strong>Example:</strong> A retail company might deploy Kubernetes clusters in individual stores to run point-of-sale, inventory management, and customer analytics applications locally, with centralized management.</p><p><strong>Benefits:</strong></p><ul><li>Reduced latency by processing data locally</li><li>Continued operation during network outages</li><li>Bandwidth optimization by filtering and aggregating data before sending to the cloud</li><li>Consistent management across edge locations</li></ul>",
        },
      ],
    },
    {
      slug: "kubernetes-benefits",
      title: "Benefits and Challenges of Kubernetes",
      duration: 12,
      content: [
        {
          type: "text",
          content:
            "<h2>Benefits of Kubernetes</h2><p>Kubernetes offers numerous advantages for organizations deploying containerized applications:</p><ul><li><strong>Portability</strong>: Run applications consistently across various environments, from on-premises to public cloud providers. Kubernetes abstracts away infrastructure differences, allowing you to focus on application logic.</li><li><strong>Scalability</strong>: Easily scale applications up or down based on demand. Kubernetes can automatically adjust the number of running containers based on CPU utilization, memory usage, or custom metrics.</li><li><strong>High Availability</strong>: Built-in features for ensuring applications remain available. Kubernetes distributes application instances across nodes and can automatically reschedule containers when nodes fail.</li><li><strong>Resource Efficiency</strong>: Better utilization of hardware resources through bin-packing algorithms that place containers optimally across your infrastructure.</li><li><strong>Declarative Configuration</strong>: Define the desired state of your applications using YAML or JSON, and let Kubernetes handle the details of reaching and maintaining that state.</li><li><strong>Service Discovery and Load Balancing</strong>: Kubernetes assigns IP addresses to pods and a single DNS name for a set of pods, and can load-balance across them.</li><li><strong>Automated Rollouts and Rollbacks</strong>: Deploy new versions of applications with zero downtime and roll back to previous versions if issues are detected.</li><li><strong>Self-healing</strong>: Kubernetes restarts failed containers, replaces and reschedules containers when nodes die, kills containers that don't respond to health checks, and doesn't advertise them to clients until they're ready to serve.</li><li><strong>Secret and Configuration Management</strong>: Deploy and update secrets and application configuration without rebuilding your container images.</li></ul>",
        },
        {
          type: "text",
          content:
            "<h2>Challenges of Kubernetes</h2><p>Despite its benefits, Kubernetes also presents several challenges that organizations should be aware of:</p><ul><li><strong>Complexity</strong>: Kubernetes has a steep learning curve for beginners. The system is powerful but complex, with many concepts, components, and configurations to understand.</li><li><strong>Resource Requirements</strong>: Kubernetes itself requires significant resources to run effectively. A production-grade cluster typically needs multiple nodes with sufficient CPU and memory.</li><li><strong>Security Configuration</strong>: Securing Kubernetes requires careful configuration of network policies, RBAC, pod security policies, and other security mechanisms. Default configurations are often not secure enough for production.</li><li><strong>Monitoring and Troubleshooting</strong>: Debugging issues in distributed systems like Kubernetes can be challenging. Effective monitoring, logging, and tracing are essential but require additional tools and expertise.</li><li><strong>Stateful Applications</strong>: While Kubernetes has improved support for stateful applications through StatefulSets and persistent volumes, managing stateful workloads is still more complex than stateless ones.</li><li><strong>Networking Complexity</strong>: Kubernetes networking model is powerful but complex, with multiple layers of abstraction. Understanding and troubleshooting networking issues requires deep knowledge.</li><li><strong>Upgrade Management</strong>: Upgrading Kubernetes clusters, especially in production environments, requires careful planning and testing to avoid disruptions.</li><li><strong>Cost Management</strong>: Without proper governance, Kubernetes can lead to resource over-provisioning and increased costs. Effective resource requests and limits, as well as cost monitoring, are essential.</li></ul>",
        },
        {
          type: "text",
          content:
            "<h2>When to Use Kubernetes</h2><p>Kubernetes is well-suited for certain scenarios, but it's not always the best choice. Consider using Kubernetes when:</p><ul><li>You're deploying microservices or distributed applications</li><li>You need to scale applications dynamically based on demand</li><li>You want portability across different environments</li><li>You're running multiple instances of your application for high availability</li><li>You need sophisticated deployment strategies like canary or blue-green deployments</li><li>You have a team with the expertise to manage Kubernetes or are willing to invest in building that expertise</li></ul><p>Kubernetes might not be the best choice when:</p><ul><li>You're running simple applications that don't need complex orchestration</li><li>You have limited resources and can't afford the overhead of running Kubernetes</li><li>Your team lacks the expertise to manage Kubernetes and you don't have time to learn</li><li>You need extremely low latency that might be affected by the Kubernetes networking model</li><li>You're running applications that are tightly coupled to specific infrastructure</li></ul>",
        },
      ],
    },
    {
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
    },
    {
      slug: "kubernetes-components",
      title: "Core Kubernetes Components",
      duration: 15,
      content: [
        {
          type: "text",
          content:
            "<h2>Core Kubernetes Components</h2><p>Kubernetes consists of several key components that work together to provide the container orchestration platform. Understanding these components is essential for working with Kubernetes effectively.</p>",
        },
        {
          type: "diagram",
          diagramId: "k8s-components",
          content: "",
        },
        {
          type: "text",
          content:
            "<h3>Control Plane Components</h3><p>The control plane components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events.</p><ul><li><strong>kube-apiserver</strong>: The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally.</li><li><strong>etcd</strong>: Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.</li><li><strong>kube-scheduler</strong>: Watches for newly created Pods with no assigned node, and selects a node for them to run on based on resource requirements, constraints, and other factors.</li><li><strong>kube-controller-manager</strong>: Runs controller processes that regulate the state of the system. Examples include the node controller, job controller, endpoints controller, and service account & token controllers.</li><li><strong>cloud-controller-manager</strong>: (Optional) Embeds cloud-specific control logic. It allows you to link your cluster into your cloud provider's API.</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Node Components</h3><p>Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment.</p><ul><li><strong>kubelet</strong>: An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod as expected.</li><li><strong>kube-proxy</strong>: A network proxy that runs on each node, implementing part of the Kubernetes Service concept. It maintains network rules that allow communication to Pods from inside or outside of the cluster.</li><li><strong>Container Runtime</strong>: The software responsible for running containers. Kubernetes supports container runtimes such as Docker, containerd, CRI-O, and any implementation of the Kubernetes CRI (Container Runtime Interface).</li></ul>",
        },
        {
          type: "text",
          content:
            "<h3>Addons</h3><p>Addons use Kubernetes resources to implement cluster features. Because these are providing cluster-level features, namespaced resources for addons belong within the kube-system namespace.</p><ul><li><strong>DNS</strong>: Cluster DNS is a DNS server that serves DNS records for Kubernetes services.</li><li><strong>Web UI (Dashboard)</strong>: A general purpose, web-based UI for Kubernetes clusters.</li><li><strong>Container Resource Monitoring</strong>: Records generic time-series metrics about containers in a central database.</li><li><strong>Cluster-level Logging</strong>: Saves container logs to a central log store with search/browsing interface.</li><li><strong>Network Plugins</strong>: Implement the Container Network Interface (CNI) specification, providing networking capabilities to the cluster.</li></ul>",
        },
        {
          type: "code",
          content:
            "# View control plane components\n$ kubectl get pods -n kube-system\n\n# View nodes in the cluster\n$ kubectl get nodes\n\n# Get detailed information about a node\n$ kubectl describe node <node-name>\n\n# View system component logs\n$ kubectl logs -n kube-system <pod-name>",
        },
      ],
    },
  ],
}

