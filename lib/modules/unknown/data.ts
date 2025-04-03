export interface Module {
  slug: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  learningObjectives: string[]
  lessons: Lesson[]
}

export interface Lesson {
  slug: string
  title: string
  duration: number
  content: LessonContent[]
}

export interface LessonContent {
  type: "text" | "diagram" | "code"
  content: string
  diagramId?: string
}

const modules: Record<string, Module> = {
  introduction: {
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
  },
  architecture: {
    slug: "architecture",
    title: "Kubernetes Architecture",
    description: "Understand the components and architecture of Kubernetes in depth",
    level: "beginner",
    learningObjectives: [
      "Understand the Kubernetes architecture and how components interact",
      "Learn about the control plane components and their responsibilities",
      "Explore worker node components and container runtime integration",
      "Understand how the Kubernetes API and resource model works",
      "Learn about the etcd distributed database and its role in Kubernetes",
      "Understand Kubernetes networking principles and implementation",
      "Explore how Kubernetes handles storage and persistence",
    ],
    lessons: [
      {
        slug: "overview",
        title: "Architecture Overview",
        duration: 15,
        content: [
          {
            type: "text",
            content:
              "<h2>Kubernetes Architecture Overview</h2><p>Kubernetes follows a client-server architecture with a control plane (master) that manages the worker nodes and the pods in the cluster. This distributed system is designed for scalability, resilience, and separation of concerns.</p><p>The architecture can be divided into two main components:</p><ul><li>Control Plane Components</li><li>Worker Node Components</li></ul>",
          },
          {
            type: "diagram",
            diagramId: "k8s-architecture",
            content: "",
          },
          {
            type: "text",
            content:
              "<h3>High-Level Architecture</h3><p>At a high level, a Kubernetes cluster consists of:</p><ul><li><strong>Control Plane</strong>: The brain of the cluster, responsible for maintaining the desired state, making global decisions, and responding to cluster events.</li><li><strong>Worker Nodes</strong>: The machines that run containerized applications. Each node contains the services necessary to run Pods and is managed by the control plane.</li><li><strong>Pods</strong>: The smallest deployable units in Kubernetes that can be created, scheduled, and managed. A Pod represents a running process on your cluster and encapsulates one or more containers.</li></ul><p>The control plane makes global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events. The worker nodes host the pods that are the components of the application workload.</p>",
          },
          {
            type: "text",
            content:
              "<h3>Architectural Principles</h3><p>Kubernetes architecture is guided by several key principles:</p><ul><li><strong>Declarative Model</strong>: Users declare the desired state of the system, and Kubernetes works to ensure that the current state matches the desired state.</li><li><strong>API-Driven</strong>: All functionality is exposed through APIs, enabling automation and integration with external systems.</li><li><strong>Loosely Coupled Components</strong>: Components interact through well-defined APIs, allowing for flexibility and extensibility.</li><li><strong>Stateless Control Plane</strong>: The control plane stores all state in etcd, making components themselves stateless and replaceable.</li><li><strong>Distributed System</strong>: Kubernetes is designed as a distributed system with no single points of failure.</li><li><strong>Extensibility</strong>: The system can be extended through custom resources, controllers, and API aggregation.</li></ul>",
          },
        ],
      },
      {
        slug: "control-plane",
        title: "Control Plane Components",
        duration: 18,
        content: [
          {
            type: "text",
            content:
              "<h2>Control Plane Components</h2><p>The control plane's components make global decisions about the cluster, as well as detecting and responding to cluster events. These components can be run on any machine in the cluster, but typically they run on dedicated machines that we call the control plane nodes.</p>",
          },
          {
            type: "text",
            content:
              "<h3>kube-apiserver</h3><p>The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally—that is, it scales by deploying more instances.</p><p><strong>Key responsibilities:</strong></p><ul><li>Serves as the primary interface to the cluster for both internal and external clients</li><li>Validates and processes API requests</li><li>Manages authentication, authorization, and admission control</li><li>Serves as the gateway to the cluster state stored in etcd</li></ul><p><strong>Design principles:</strong></p><ul><li>RESTful API design with resource-based endpoints</li><li>Horizontal scalability through stateless design</li><li>Versioned API with strong backward compatibility guarantees</li><li>Extensible through Custom Resource Definitions (CRDs) and API aggregation</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>etcd</h3><p>Consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data. Always have a backup plan for etcd's data for your Kubernetes clusters.</p><p><strong>Key characteristics:</strong></p><ul><li>Distributed and highly available key-value store</li><li>Provides strong consistency guarantees through the Raft consensus algorithm</li><li>Stores all cluster state, including objects, configuration, and secrets</li><li>Supports watch operations for efficient change notification</li></ul><p><strong>Best practices:</strong></p><ul><li>Run etcd as a cluster with at least three nodes for high availability</li><li>Regularly back up etcd data</li><li>Monitor etcd performance and resource usage</li><li>Use separate disks with low latency for etcd storage</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>kube-scheduler</h3><p>The scheduler watches for newly created Pods with no assigned node, and selects a node for them to run on.</p><p><strong>Scheduling process:</strong></p><ul><li><strong>Filtering</strong>: Find the set of nodes where it's feasible to schedule the Pod based on resource requirements, node selectors, affinity/anti-affinity rules, taints and tolerations, etc.</li><li><strong>Scoring</strong>: Rank the remaining nodes to find the best placement based on various priority functions</li><li><strong>Binding</strong>: Update the Pod definition with the selected node name</li></ul><p><strong>Advanced scheduling features:</strong></p><ul><li>Pod affinity and anti-affinity</li><li>Node affinity and anti-affinity</li><li>Taints and tolerations</li><li>Custom schedulers</li><li>Multiple schedulers</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>kube-controller-manager</h3><p>The controller manager runs controller processes that regulate the state of the system. Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process.</p><p><strong>Some of these controllers include:</strong></p><ul><li><strong>Node controller</strong>: Responsible for noticing and responding when nodes go down</li><li><strong>Replication controller</strong>: Responsible for maintaining the correct number of pods for every replication controller object in the system</li><li><strong>Endpoints controller</strong>: Populates the Endpoints object (joins Services & Pods)</li><li><strong>Service Account & Token controllers</strong>: Create default accounts and API access tokens for new namespaces</li><li><strong>Job controller</strong>: Watches for Job objects that represent one-off tasks, then creates Pods to run those tasks to completion</li><li><strong>CronJob controller</strong>: Executes Jobs on a time-based schedule</li><li><strong>Deployment controller</strong>: Provides declarative updates for Pods and ReplicaSets</li><li><strong>StatefulSet controller</strong>: Manages the deployment and scaling of a set of Pods with guarantees about ordering and uniqueness</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>cloud-controller-manager</h3><p>The cloud controller manager is a Kubernetes control plane component that embeds cloud-specific control logic. It lets you link your cluster into your cloud provider's API, and separates the components that interact with that cloud platform from components that only interact with your cluster.</p><p><strong>Cloud-specific controllers:</strong></p><ul><li><strong>Node controller</strong>: For checking the cloud provider to determine if a node has been deleted in the cloud after it stops responding</li><li><strong>Route controller</strong>: For setting up routes in the underlying cloud infrastructure</li><li><strong>Service controller</strong>: For creating, updating and deleting cloud provider load balancers</li><li><strong>Volume controller</strong>: For creating, attaching, and mounting volumes, and interacting with the cloud provider to orchestrate volumes</li></ul>",
          },
          {
            type: "code",
            content:
              "# View control plane components in a cluster\n$ kubectl get pods -n kube-system\n\n# Get detailed information about the API server\n$ kubectl describe pod kube-apiserver-<node-name> -n kube-system\n\n# Check etcd status\n$ kubectl exec -it etcd-<node-name> -n kube-system -- etcdctl member list\n\n# View controller manager logs\n$ kubectl logs kube-controller-manager-<node-name> -n kube-system",
          },
        ],
      },
      {
        slug: "worker-nodes",
        title: "Worker Node Components",
        duration: 15,
        content: [
          {
            type: "text",
            content:
              "<h2>Worker Node Components</h2><p>Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment. These components enable a node to communicate with the control plane and handle container workloads.</p>",
          },
          {
            type: "text",
            content:
              "<h3>kubelet</h3><p>The kubelet is an agent that runs on each node in the cluster. It makes sure that containers are running in a Pod as expected.</p><p><strong>Key responsibilities:</strong></p><ul><li>Communicates with the API server to receive Pod specifications</li><li>Ensures that the containers described in those PodSpecs are running and healthy</li><li>Reports node and Pod status to the control plane</li><li>Runs container liveness, readiness, and startup probes</li><li>Manages container lifecycle events</li><li>Collects and reports resource usage metrics</li></ul><p><strong>How kubelet works:</strong></p><ul><li>Watches for changes to Pod specifications assigned to its node</li><li>Uses the Container Runtime Interface (CRI) to interact with the container runtime</li><li>Mounts volumes specified in the Pod definition</li><li>Downloads secrets referenced by the Pod</li><li>Reports the status of Pods running on the node</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>kube-proxy</h3><p>kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept. It maintains network rules on nodes that allow network communication to your Pods from network sessions inside or outside of your cluster.</p><p><strong>Proxy modes:</strong></p><ul><li><strong>iptables</strong> (default): Uses iptables rules to redirect traffic to randomly selected backend Pods</li><li><strong>IPVS</strong> (IP Virtual Server): For clusters with a large number of Services, provides better performance and more load balancing algorithms</li><li><strong>userspace</strong> (legacy): Installs iptables rules that redirect traffic to a local proxy port, which then forwards to backend Pods</li></ul><p><strong>Key functions:</strong></p><ul><li>Implements the Kubernetes Service abstraction by maintaining network rules</li><li>Performs connection forwarding</li><li>Handles load balancing for Service endpoints</li><li>Provides basic health checking</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Container Runtime</h3><p>The container runtime is the software responsible for running containers. Kubernetes supports several container runtimes through the Container Runtime Interface (CRI).</p><p><strong>Supported container runtimes:</strong></p><ul><li><strong>containerd</strong>: A simple, robust, and portable container runtime</li><li><strong>CRI-O</strong>: A lightweight runtime specifically for Kubernetes</li><li><strong>Docker Engine</strong>: Through the dockershim adapter (deprecated in Kubernetes 1.20+)</li><li>Any implementation of the Kubernetes CRI</li></ul><p><strong>Container Runtime Interface (CRI):</strong></p><ul><li>Defines the API between Kubernetes and the container runtime</li><li>Allows for pluggable container runtimes</li><li>Includes image service and runtime service APIs</li><li>Enables innovation in container runtimes without changing Kubernetes core</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Node Components Interaction</h3><p>The node components work together to manage containers and provide the runtime environment:</p><ol><li>The kubelet receives Pod specifications from the API server</li><li>The kubelet uses the CRI to instruct the container runtime to pull images and run containers</li><li>The container runtime manages the containers, their images, and their execution environment</li><li>kube-proxy sets up networking rules to allow communication to and from Pods</li><li>The kubelet monitors container health and reports status back to the control plane</li></ol>",
          },
          {
            type: "code",
            content:
              "# View nodes in the cluster\n$ kubectl get nodes\n\n# Get detailed information about a node\n$ kubectl describe node <node-name>\n\n# Check kubelet status\n$ systemctl status kubelet\n\n# View kubelet logs\n$ journalctl -u kubelet\n\n# Check kube-proxy pods\n$ kubectl get pods -n kube-system -l k8s-app=kube-proxy\n\n# View container runtime information\n$ kubectl get nodes -o wide",
          },
        ],
      },
      {
        slug: "kubernetes-objects",
        title: "Kubernetes Objects",
        duration: 15,
        content: [
          {
            type: "text",
            content:
              "<h2>Kubernetes Objects</h2><p>Kubernetes objects are persistent entities in the Kubernetes system. Kubernetes uses these entities to represent the state of your cluster. They describe:</p><ul><li>What containerized applications are running (and on which nodes)</li><li>The resources available to those applications</li><li>The policies around how those applications behave, such as restart policies, upgrades, and fault-tolerance</li></ul><p>A Kubernetes object is a \"record of intent\"—once you create the object, the Kubernetes system will constantly work to ensure that object exists. By creating an object, you're effectively telling the Kubernetes system what you want your cluster's workload to look like; this is your cluster's <em>desired state</em>.</p>",
          },
          {
            type: "text",
            content:
              "<h3>Basic Objects</h3><ul><li><strong>Pod</strong>: The smallest deployable unit in Kubernetes, representing a single instance of a running process. A Pod encapsulates one or more containers, storage resources, a unique network IP, and options that govern how the container(s) should run.</li><li><strong>Service</strong>: An abstraction which defines a logical set of Pods and a policy by which to access them. Services enable loose coupling between dependent Pods.</li><li><strong>Volume</strong>: A directory containing data, accessible to the containers in a pod. Kubernetes volumes have an explicit lifetime - the same as the Pod that encloses them.</li><li><strong>Namespace</strong>: A way to divide cluster resources between multiple users or projects. Names of resources need to be unique within a namespace, but not across namespaces.</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Controllers</h3><p>Controllers build upon the basic objects, and provide additional functionality and convenience features.</p><ul><li><strong>ReplicaSet</strong>: Ensures that a specified number of pod replicas are running at any given time. It's often used by Deployments to manage Pod lifecycle.</li><li><strong>Deployment</strong>: Provides declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate.</li><li><strong>StatefulSet</strong>: Manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec, but it maintains a sticky identity for each of their Pods.</li><li><strong>DaemonSet</strong>: Ensures that all (or some) nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them. As nodes are removed from the cluster, those Pods are garbage collected.</li><li><strong>Job</strong>: Creates one or more Pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the Job tracks the successful completions.</li><li><strong>CronJob</strong>: Creates Jobs on a repeating schedule, like a cron job in Linux.</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Object Spec and Status</h3><p>Every Kubernetes object includes two nested object fields that govern the object's configuration: the object <em>spec</em> and the object <em>status</em>.</p><ul><li>The <strong>spec</strong> describes the desired state of the object—the characteristics that you want the object to have.</li><li>The <strong>status</strong> describes the actual state of the object, and is supplied and updated by the Kubernetes system.</li></ul><p>At any given time, the Kubernetes Control Plane actively manages an object's actual state to match the desired state you supplied.</p>",
          },
          {
            type: "text",
            content:
              "<h3>Object Management</h3><p>There are several ways to create and manage Kubernetes objects:</p><ul><li><strong>Imperative commands</strong>: Create, update, and delete objects directly using kubectl commands like `kubectl run` or `kubectl expose`.</li><li><strong>Imperative object configuration</strong>: Create objects using kubectl with specific files, like `kubectl create -f nginx.yaml`.</li><li><strong>Declarative object configuration</strong>: Create objects by defining the desired state in configuration files and applying them with `kubectl apply -f directory/`.</li></ul><p>The declarative approach is recommended for production environments as it provides better tracking of changes and can be version controlled.</p>",
          },
          {
            type: "code",
            content:
              "# Create a deployment imperatively\n$ kubectl create deployment nginx --image=nginx\n\n# Create a service imperatively\n$ kubectl expose deployment nginx --port=80 --type=ClusterIP\n\n# Create objects declaratively\n$ kubectl apply -f deployment.yaml\n\n# Example YAML for a Deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80",
          },
        ],
      },
      {
        slug: "api-server",
        title: "Kubernetes API Server",
        duration: 12,
        content: [
          {
            type: "text",
            content:
              "<h2>Kubernetes API Server</h2><p>The API server is the front end for the Kubernetes control plane. It exposes the Kubernetes API and is designed to scale horizontally. The API server is the central management entity and the only component that directly communicates with the etcd data store.</p>",
          },
          {
            type: "text",
            content:
              "<h3>Key Functions</h3><ul><li>Serves as the frontend for the Kubernetes control plane</li><li>Exposes the Kubernetes API</li><li>Processes REST operations</li><li>Validates and configures data for API objects</li><li>Updates the corresponding objects in etcd</li><li>Serves as the gateway between cluster components</li><li>Implements authentication, authorization, and admission control</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>API Structure</h3><p>The Kubernetes API is structured around RESTful principles:</p><ul><li><strong>Resources</strong>: Objects like Pods, Services, and Deployments</li><li><strong>Verbs</strong>: Standard HTTP methods like GET, POST, PUT, DELETE</li><li><strong>Versioning</strong>: API groups and versions (e.g., apps/v1, networking.k8s.io/v1)</li><li><strong>Namespaces</strong>: Logical partitioning of resources</li></ul><p>The API is versioned to ensure backward compatibility and smooth transitions during upgrades. Version types include:</p><ul><li><strong>Alpha</strong>: May be buggy, disabled by default, support may be dropped at any time</li><li><strong>Beta</strong>: Code is well tested, enabled by default, details may change but support won't be dropped</li><li><strong>Stable</strong>: Will appear in released software for many versions</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>API Access</h3><p>The API can be accessed via:</p><ul><li><strong>kubectl</strong>: The command-line interface for Kubernetes</li><li><strong>REST calls</strong>: Direct HTTP requests to the API server</li><li><strong>Client libraries</strong>: Official libraries for various programming languages</li><li><strong>Custom controllers</strong>: Components that watch for changes to specific resources and take action</li></ul><p>Authentication to the API server is done through one or more authentication methods:</p><ul><li>Client certificates</li><li>Bearer tokens</li><li>Authentication proxy</li><li>Service account tokens</li><li>OpenID Connect tokens</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Authorization and Admission Control</h3><p>After authentication, requests go through:</p><ul><li><strong>Authorization</strong>: Determines if the authenticated user has permission to perform the requested action on the resource. Kubernetes supports multiple authorization modules:</li><ul><li>RBAC (Role-Based Access Control)</li><li>ABAC (Attribute-Based Access Control)</li><li>Node Authorization</li><li>Webhook Authorization</li></ul><li><strong>Admission Control</strong>: Software modules that can modify or reject requests. Admission controllers act on the content of objects and can:</li><ul><li>Validate requests (e.g., ensure all required fields are set)</li><li>Mutate requests (e.g., set default values for missing fields)</li><li>Examples include: NamespaceLifecycle, LimitRanger, ServiceAccount, PodSecurityPolicy</li></ul></ul>",
          },
          {
            type: "code",
            content:
              "# Example of accessing the API server using kubectl\n$ kubectl get pods\n$ kubectl get services\n$ kubectl apply -f deployment.yaml\n\n# Direct API access using curl\n$ APISERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')\n$ TOKEN=$(kubectl get secret $(kubectl get serviceaccount default -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode)\n$ curl -X GET $APISERVER/api/v1/namespaces/default/pods --header \"Authorization: Bearer $TOKEN\" --insecure\n\n# View API resources and their versions\n$ kubectl api-resources\n$ kubectl api-versions\n\n# Explore API documentation\n$ kubectl explain pod\n$ kubectl explain deployment.spec.strategy",
          },
        ],
      },
      {
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
      },
      {
        slug: "storage-architecture",
        title: "Storage Architecture",
        duration: 15,
        content: [
          {
            type: "text",
            content:
              "<h2>Kubernetes Storage Architecture</h2><p>Kubernetes provides a rich storage model to support stateful applications. The storage architecture is designed to be flexible, extensible, and to support a wide range of storage systems and use cases.</p>",
          },
          {
            type: "text",
            content:
              '<h3>Storage Concepts</h3><p>Kubernetes storage is built around several key concepts:</p><ul><li><strong>Volumes</strong>: A directory accessible to containers in a pod with a lifetime tied to the pod</li><li><strong>PersistentVolumes (PV)</strong>: A piece of storage in the cluster provisioned by an administrator or dynamically</li><li><strong>PersistentVolumeClaims (PVC)</strong>: A request for storage by a user that can be fulfilled by a PV</li><li><strong>StorageClasses</strong>: Describe the "classes" of storage offered by the cluster</li><li><strong>Volume Snapshots</strong>: Point-in-time copies of a volume</li><li><strong>CSI Drivers</strong>: Container Storage Interface implementations that connect Kubernetes to storage systems</li></ul>',
          },
          {
            type: "text",
            content:
              "<h3>Storage Provisioning</h3><p>Kubernetes supports two methods of provisioning storage:</p><ul><li><strong>Static Provisioning</strong>: An administrator creates PVs in advance, which are then available for users to claim</li><li><strong>Dynamic Provisioning</strong>: PVs are created on-demand when a user creates a PVC, based on a StorageClass</li></ul><p>The workflow for dynamic provisioning is:</p><ol><li>Administrator creates a StorageClass</li><li>User creates a PVC requesting storage from that class</li><li>The provisioner for that StorageClass creates a PV</li><li>The PV is bound to the PVC</li><li>The PVC can be used by a Pod</li></ol>",
          },
          {
            type: "text",
            content:
              "<h3>Container Storage Interface (CSI)</h3><p>CSI is a standard for exposing arbitrary block and file storage systems to containerized workloads. It allows storage vendors to develop a plugin once and have it work across multiple container orchestration systems.</p><p>CSI architecture consists of:</p><ul><li><strong>CSI Controller Plugin</strong>: Handles volume lifecycle operations like create, delete, attach, detach</li><li><strong>CSI Node Plugin</strong>: Handles node-specific operations like mount, unmount</li><li><strong>Kubernetes CSI Sidecar Containers</strong>: Helper containers that simplify the development of CSI drivers</li></ul><p>Benefits of CSI include:</p><ul><li>Standardized interface for storage systems</li><li>Ability to add new storage features without changing Kubernetes core</li><li>Support for a wide range of storage systems</li><li>Improved security through separation of storage driver code</li></ul>",
          },
          {
            type: "text",
            content:
              "<h3>Volume Lifecycle</h3><p>The lifecycle of a volume in Kubernetes involves several stages:</p><ol><li><strong>Provisioning</strong>: Creating the storage resource (static or dynamic)</li><li><strong>Binding</strong>: Associating a PV with a PVC</li><li><strong>Using</strong>: Mounting the volume into a Pod</li><li><strong>Releasing</strong>: Deleting the PVC, which may or may not delete the underlying storage</li><li><strong>Reclaiming</strong>: Determining what happens to the PV after release (Delete, Retain, or Recycle)</li></ol><p>The reclaim policy determines what happens to a PV when its PVC is deleted:</p><ul><li><strong>Delete</strong>: The PV and its associated storage are deleted</li><li><strong>Retain</strong>: The PV remains but becomes unavailable for new claims</li><li><strong>Recycle</strong> (deprecated): The volume's contents are deleted, but the volume itself is kept for future use</li></ul>",
          },
          {
            type: "code",
            content:
              '# Create a StorageClass for dynamic provisioning\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp2\nreclaimPolicy: Delete\nallowVolumeExpansion: true\n\n# Create a PersistentVolumeClaim\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: fast\n  resources:\n    requests:\n      storage: 10Gi\n\n# Use the PVC in a Pod\napiVersion: v1\nkind: Pod\nmetadata:\n  name: mypod\nspec:\n  containers:\n    - name: myfrontend\n      image: nginx\n      volumeMounts:\n      - mountPath: "/var/www/html"\n        name: mypd\n  volumes:\n    - name: mypd\n      persistentVolumeClaim:\n        claimName: my-pvc',
          },
        ],
      },
    ],
  },
  networking: {
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
              '# Example CNI configuration for Calico\n{\n  "name": "k8s-pod-network",\n  "cniVersion": "0.3.1",\n  "plugins": [\n    {\n      "type": "calico",\n      "log_level": "info",\n      "datastore_type": "kubernetes",\n      "nodename": "node-1",\n      "ipam": {\n        "type": "calico-ipam"\n      },\n      "policy": {\n        "type": "k8s"\n      },\n      "kubernetes": {\n        "kubeconfig": "/etc/cni/net.d/calico-kubeconfig"\n      }\n    },\n    {\n      "type": "portmap",\n      "snat": true,\n      "capabilities": {"portMappings": true}\n    }\n  ]\n}\n\n# Install Calico CNI plugin\n$ kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml\n\n# View CNI configuration on a node\n$ ls /etc/cni/net.d/\n$ cat /etc/cni/net.d/10-calico.conflist\n\n# Check which CNI plugins are installed\n$ ls /opt/cni/bin/',
          },
        ],
      },
    ],
  },
}

// Helper functions to get module and lesson data
export function getModuleData(slug: string): Module | undefined {
  return modules[slug]
}

export function getLessonData(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  const module = getModuleData(moduleSlug)
  return module?.lessons.find((lesson) => lesson.slug === lessonSlug)
}

