import type { Lesson } from "../../../types"

export const storageArchitectureLesson: Lesson = {
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
  resources: [
    {
      title: "Kubernetes Storage Concepts",
      url: "https://kubernetes.io/docs/concepts/storage/",
      type: "documentation",
      description: "Official documentation on storage concepts in Kubernetes.",
    },
    {
      title: "Persistent Volumes",
      url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
      type: "documentation",
      description: "Documentation on persistent volumes and persistent volume claims.",
    },
    {
      title: "Storage Classes",
      url: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
      type: "documentation",
      description: "Documentation on storage classes for dynamic provisioning.",
    },
    {
      title: "Container Storage Interface (CSI)",
      url: "https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/",
      type: "article",
      description: "Blog post on the Container Storage Interface (CSI) in Kubernetes.",
    },
    {
      title: "Kubernetes Volume Plugins",
      url: "https://kubernetes.io/docs/concepts/storage/volumes/",
      type: "documentation",
      description: "Documentation on volume plugins available in Kubernetes.",
    },
    {
      title: "CSI Drivers",
      url: "https://kubernetes-csi.github.io/docs/drivers.html",
      type: "documentation",
      description: "List of Container Storage Interface (CSI) drivers for various storage systems.",
    },
    {
      title: "Kubernetes Storage Deep Dive",
      url: "https://www.youtube.com/watch?v=0swOh5C3OVM",
      type: "video",
      description: "In-depth video on Kubernetes storage architecture and implementation.",
    },
  ],
}

