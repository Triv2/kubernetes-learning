"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LessonDiagramProps {
  id: string
}

export function LessonDiagram({ id }: LessonDiagramProps) {
  const [zoom, setZoom] = useState(100)
  const [currentStep, setCurrentStep] = useState(0)

  // Get diagram data based on ID
  const diagram = getDiagramById(id)

  if (!diagram) {
    return <div>Diagram not found</div>
  }

  const handleZoomIn = () => {
    if (zoom < 150) {
      setZoom(zoom + 10)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 10)
    }
  }

  const handleNextStep = () => {
    if (currentStep < diagram.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden mb-8">
      <div className="bg-muted p-4 flex items-center justify-between">
        <h3 className="font-medium">{diagram.title}</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm">{zoom}%</span>
          <Button variant="ghost" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative bg-background p-4 overflow-auto" style={{ height: "400px" }}>
        <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}>
          {diagram.steps[currentStep].content}
        </div>
      </div>

      {diagram.steps.length > 1 && (
        <div className="bg-muted p-4 flex items-center justify-between">
          <Button variant="outline" size="sm" onClick={handlePrevStep} disabled={currentStep === 0}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="text-sm">
            Step {currentStep + 1} of {diagram.steps.length}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNextStep}
            disabled={currentStep === diagram.steps.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}

// Enhanced function to get diagram data with more detailed diagrams
function getDiagramById(id: string) {
  const diagrams = {
    "k8s-architecture": {
      title: "Kubernetes Architecture",
      steps: [
        {
          content: (
            <div className="w-[800px]">
              <div className="border-2 border-primary p-6 rounded-lg mb-8 text-center">
                <h3 className="text-xl font-bold mb-4">Control Plane</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">API Server</p>
                    <p className="text-xs text-muted-foreground mt-2">Exposes the Kubernetes API</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">Scheduler</p>
                    <p className="text-xs text-muted-foreground mt-2">Assigns pods to nodes</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">Controller Manager</p>
                    <p className="text-xs text-muted-foreground mt-2">Runs controller processes</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">etcd</p>
                    <p className="text-xs text-muted-foreground mt-2">Stores cluster data</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="border-2 border-muted-foreground p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-center">Worker Node 1</h3>
                  <div className="border p-4 rounded-lg mb-4">
                    <p className="font-medium">Kubelet</p>
                    <p className="text-xs text-muted-foreground mt-2">Ensures containers are running</p>
                  </div>
                  <div className="border p-4 rounded-lg mb-4">
                    <p className="font-medium">Kube Proxy</p>
                    <p className="text-xs text-muted-foreground mt-2">Maintains network rules</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">Container Runtime</p>
                    <p className="text-xs text-muted-foreground mt-2">Runs containers (Docker, containerd)</p>
                  </div>
                </div>

                <div className="border-2 border-muted-foreground p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-center">Worker Node 2</h3>
                  <div className="border p-4 rounded-lg mb-4">
                    <p className="font-medium">Kubelet</p>
                    <p className="text-xs text-muted-foreground mt-2">Ensures containers are running</p>
                  </div>
                  <div className="border p-4 rounded-lg mb-4">
                    <p className="font-medium">Kube Proxy</p>
                    <p className="text-xs text-muted-foreground mt-2">Maintains network rules</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">Container Runtime</p>
                    <p className="text-xs text-muted-foreground mt-2">Runs containers (Docker, containerd)</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    "k8s-components": {
      title: "Kubernetes Components",
      steps: [
        {
          content: (
            <div className="w-[800px]">
              <div className="border-2 border-primary p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-center">Control Plane Components</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">kube-apiserver</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Exposes the Kubernetes API</li>
                      <li>Validates and processes API requests</li>
                      <li>Serves as the frontend for the control plane</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">etcd</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Consistent and highly-available key-value store</li>
                      <li>Stores all cluster data</li>
                      <li>Critical for cluster state persistence</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">kube-scheduler</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Watches for newly created Pods</li>
                      <li>Selects nodes for Pods to run on</li>
                      <li>Considers resource requirements, constraints</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">kube-controller-manager</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Runs controller processes</li>
                      <li>Regulates state of the system</li>
                      <li>Includes node, replication controllers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-muted-foreground p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Node Components</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">kubelet</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Runs on each node</li>
                      <li>Ensures containers are running in Pods</li>
                      <li>Communicates with control plane</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">kube-proxy</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Maintains network rules</li>
                      <li>Enables communication to Pods</li>
                      <li>Implements Service concept</li>
                    </ul>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium">Container Runtime</p>
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      <li>Runs containers</li>
                      <li>Examples: Docker, containerd, CRI-O</li>
                      <li>Implements CRI specification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    "pod-lifecycle": {
      title: "Pod Lifecycle",
      steps: [
        {
          content: (
            <div className="w-[800px]">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-6">Pod Lifecycle States</h3>
                <div className="flex justify-between items-center w-full max-w-3xl mb-12">
                  <div className="border-2 border-primary p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Pending</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Pod has been accepted but containers not created
                    </p>
                  </div>
                  <div className="w-12 h-0.5 bg-muted-foreground"></div>
                  <div className="border-2 border-primary p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Running</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Pod has been bound to a node and all containers created
                    </p>
                  </div>
                  <div className="w-12 h-0.5 bg-muted-foreground"></div>
                  <div className="border-2 border-primary p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Succeeded</p>
                    <p className="text-xs text-muted-foreground mt-2">All containers terminated successfully</p>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full max-w-3xl">
                  <div className="border-2 border-primary p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Pending</p>
                  </div>
                  <div className="w-12 h-0.5 bg-muted-foreground"></div>
                  <div className="border-2 border-primary p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Running</p>
                  </div>
                  <div className="w-12 h-0.5 bg-muted-foreground"></div>
                  <div className="border-2 border-red-500 p-4 rounded-lg text-center w-32">
                    <p className="font-medium">Failed</p>
                    <p className="text-xs text-muted-foreground mt-2">At least one container terminated with error</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          content: (
            <div className="w-[800px]">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-6">Pod Conditions</h3>
                <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium mb-2">PodScheduled</p>
                    <p className="text-sm">Pod has been scheduled to a node</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium mb-2">ContainersReady</p>
                    <p className="text-sm">All containers in the Pod are ready</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium mb-2">Initialized</p>
                    <p className="text-sm">All init containers have completed successfully</p>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <p className="font-medium mb-2">Ready</p>
                    <p className="text-sm">Pod is able to serve requests and should be added to load balancing pools</p>
                  </div>
                </div>

                <div className="mt-8 border-2 border-muted p-4 rounded-lg w-full max-w-3xl">
                  <p className="font-medium mb-2">Pod Probes</p>
                  <ul className="list-disc pl-5">
                    <li className="mb-2">
                      <strong>Liveness Probe</strong>: Indicates if the container is running
                    </li>
                    <li className="mb-2">
                      <strong>Readiness Probe</strong>: Indicates if the container is ready to receive traffic
                    </li>
                    <li>
                      <strong>Startup Probe</strong>: Indicates if the application has started
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    "k8s-networking": {
      title: "Kubernetes Networking",
      steps: [
        {
          content: (
            <div className="w-[800px]">
              <h3 className="text-xl font-bold mb-6 text-center">Kubernetes Networking Model</h3>
              <div className="border-2 border-primary p-4 rounded-lg text-center w-48 mx-auto mb-8">
                <p className="font-medium">External Traffic</p>
              </div>

              <div className="flex justify-center mb-4">
                <div className="h-8 w-0.5 bg-muted-foreground"></div>
              </div>

              <div className="border-2 border-primary p-4 rounded-lg text-center w-48 mx-auto mb-8">
                <p className="font-medium">Ingress</p>
                <p className="text-xs text-muted-foreground mt-2">HTTP/HTTPS routing</p>
              </div>

              <div className="flex justify-center mb-4">
                <div className="h-8 w-0.5 bg-muted-foreground"></div>
              </div>

              <div className="border-2 border-primary p-4 rounded-lg text-center w-48 mx-auto mb-8">
                <p className="font-medium">Service</p>
                <p className="text-xs text-muted-foreground mt-2">Stable endpoint for pods</p>
              </div>

              <div className="flex justify-center mb-4">
                <div className="h-8 w-0.5 bg-muted-foreground"></div>
              </div>

              <div className="grid grid-cols-3 gap-8 justify-items-center">
                <div className="border-2 border-muted-foreground p-4 rounded-lg text-center w-32">
                  <p className="font-medium">Pod</p>
                  <p className="text-xs text-muted-foreground mt-2">10.244.1.2</p>
                </div>
                <div className="border-2 border-muted-foreground p-4 rounded-lg text-center w-32">
                  <p className="font-medium">Pod</p>
                  <p className="text-xs text-muted-foreground mt-2">10.244.1.3</p>
                </div>
                <div className="border-2 border-muted-foreground p-4 rounded-lg text-center w-32">
                  <p className="font-medium">Pod</p>
                  <p className="text-xs text-muted-foreground mt-2">10.244.2.2</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          content: (
            <div className="w-[800px]">
              <h3 className="text-xl font-bold mb-6 text-center">Service Types</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-2 border-primary p-4 rounded-lg">
                  <p className="font-medium mb-2 text-center">ClusterIP</p>
                  <div className="bg-muted p-3 rounded-lg mb-3">
                    <p className="text-sm">Internal cluster IP only</p>
                  </div>
                  <div className="border p-2 rounded-lg text-center mb-2">
                    <p className="text-sm">Service: 10.96.0.10</p>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="h-6 w-0.5 bg-muted-foreground"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border p-2 rounded-lg text-center">
                      <p className="text-xs">Pod: 10.244.1.2</p>
                    </div>
                    <div className="border p-2 rounded-lg text-center">
                      <p className="text-xs">Pod: 10.244.1.3</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-primary p-4 rounded-lg">
                  <p className="font-medium mb-2 text-center">NodePort</p>
                  <div className="bg-muted p-3 rounded-lg mb-3">
                    <p className="text-sm">Accessible via Node IP:NodePort</p>
                  </div>
                  <div className="border p-2 rounded-lg text-center mb-2">
                    <p className="text-sm">Node: 192.168.1.1:30007</p>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="h-6 w-0.5 bg-muted-foreground"></div>
                  </div>
                  <div className="border p-2 rounded-lg text-center mb-2">
                    <p className="text-sm">Service: 10.96.0.10</p>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="h-6 w-0.5 bg-muted-foreground"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border p-2 rounded-lg text-center">
                      <p className="text-xs">Pod: 10.244.1.2</p>
                    </div>
                    <div className="border p-2 rounded-lg text-center">
                      <p className="text-xs">Pod: 10.244.1.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  }

  return diagrams[id as keyof typeof diagrams]
}

