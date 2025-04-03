import type { Lesson } from "../../../types"

export const kubernetesObjectsLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes Objects",
      url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/",
      type: "documentation",
      description: "Official documentation on Kubernetes objects and their role in the system.",
    },
    {
      title: "Kubernetes Object Management",
      url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/",
      type: "documentation",
      description: "Documentation on different approaches to managing Kubernetes objects.",
    },
    {
      title: "Kubernetes API Conventions",
      url: "https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md",
      type: "github",
      description: "Detailed documentation on Kubernetes API conventions and object design.",
    },
    {
      title: "Kubernetes Object Names and IDs",
      url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",
      type: "documentation",
      description: "Documentation on how objects are named and identified in Kubernetes.",
    },
    {
      title: "Kubernetes Controllers",
      url: "https://kubernetes.io/docs/concepts/architecture/controller/",
      type: "documentation",
      description: "Documentation on how controllers work in Kubernetes to manage objects.",
    },
    {
      title: "Kubernetes Object Management Using kubectl",
      url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/",
      type: "tutorial",
      description: "Tutorial on managing Kubernetes objects using kubectl command-line tool.",
    },
  ],
}

