"use client"

import { Cpu, Database, Globe, Server, Settings, Network } from "lucide-react"

interface ModuleDiagramProps {
  moduleSlug: string
}

export function ModuleDiagram({ moduleSlug }: ModuleDiagramProps) {
  // Different diagrams based on module type
  switch (moduleSlug) {
    case "introduction":
      return <IntroductionDiagram />
    case "architecture":
      return <ArchitectureDiagram />
    case "networking":
      return <NetworkingDiagram />
    default:
      return <DefaultDiagram />
  }
}

function IntroductionDiagram() {
  return (
    <div className="bg-muted p-6 rounded-lg h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Server className="h-8 w-8 text-primary" />
          </div>
          <span className="text-sm">Containers</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Settings className="h-8 w-8 text-primary" />
          </div>
          <span className="text-sm">Orchestration</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <span className="text-sm">Scaling</span>
        </div>
      </div>
    </div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="bg-muted p-6 rounded-lg h-full flex items-center justify-center">
      <div className="relative w-full max-w-xs">
        <div className="mb-8 p-4 border-2 border-primary rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <Cpu className="h-8 w-8 text-primary" />
          </div>
          <span className="font-medium">Control Plane</span>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-background p-2 rounded text-xs">API Server</div>
            <div className="bg-background p-2 rounded text-xs">Scheduler</div>
            <div className="bg-background p-2 rounded text-xs">Controllers</div>
            <div className="bg-background p-2 rounded text-xs">etcd</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border-2 border-muted-foreground rounded-lg text-center">
            <div className="flex justify-center mb-2">
              <Server className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Worker Node 1</span>
            <div className="grid grid-cols-1 gap-2 mt-3">
              <div className="bg-background p-2 rounded text-xs">Kubelet</div>
              <div className="bg-background p-2 rounded text-xs">Kube Proxy</div>
              <div className="bg-background p-2 rounded text-xs">Containers</div>
            </div>
          </div>
          <div className="p-4 border-2 border-muted-foreground rounded-lg text-center">
            <div className="flex justify-center mb-2">
              <Server className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Worker Node 2</span>
            <div className="grid grid-cols-1 gap-2 mt-3">
              <div className="bg-background p-2 rounded text-xs">Kubelet</div>
              <div className="bg-background p-2 rounded text-xs">Kube Proxy</div>
              <div className="bg-background p-2 rounded text-xs">Containers</div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[45%] w-0.5 h-8 bg-muted-foreground transform -translate-x-1/2"></div>
      </div>
    </div>
  )
}

function NetworkingDiagram() {
  return (
    <div className="bg-muted p-6 rounded-lg h-full flex items-center justify-center">
      <div className="w-full max-w-xs">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Network className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="p-4 border-2 border-primary rounded-lg text-center mb-4">
          <span className="font-medium">Ingress</span>
          <div className="text-xs text-muted-foreground mt-1">HTTP/HTTPS Routing</div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-8 bg-muted-foreground"></div>
        </div>

        <div className="p-4 border-2 border-muted-foreground rounded-lg text-center mb-4">
          <span className="font-medium">Service</span>
          <div className="text-xs text-muted-foreground mt-1">Load Balancing</div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-8 bg-muted-foreground"></div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 border-2 border-muted-foreground rounded-lg text-center">
            <span className="text-xs">Pod</span>
          </div>
          <div className="p-2 border-2 border-muted-foreground rounded-lg text-center">
            <span className="text-xs">Pod</span>
          </div>
          <div className="p-2 border-2 border-muted-foreground rounded-lg text-center">
            <span className="text-xs">Pod</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DefaultDiagram() {
  return (
    <div className="bg-muted p-6 rounded-lg h-full flex items-center justify-center">
      <div className="text-center">
        <Database className="h-16 w-16 mx-auto mb-4 text-primary" />
        <p className="text-muted-foreground">Module visualization</p>
      </div>
    </div>
  )
}

