import type { Module } from "../types"

export const architectureModule: Module = {
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
}

