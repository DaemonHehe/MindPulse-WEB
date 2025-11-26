import { ChevronLeft, Watch, Smartphone, Plus, Check, Battery, Signal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const devices = [
  {
    name: "Empatica E4",
    type: "Wristband",
    status: "connected",
    battery: 78,
    signal: "strong",
  },
  {
    name: "iPhone 15 Pro",
    type: "Smartphone",
    status: "connected",
    battery: 92,
    signal: "strong",
  },
]

export default function DevicesPage() {
  return (
    <div className="px-4 py-6 space-y-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/profile" className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-foreground">Connected Devices</h1>
      </div>

      {/* Connected Devices */}
      <div className="space-y-3">
        {devices.map((device, i) => (
          <div key={i} className="p-4 rounded-xl bg-card/50 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {device.type === "Wristband" ? (
                  <Watch className="w-6 h-6 text-primary" />
                ) : (
                  <Smartphone className="w-6 h-6 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{device.name}</h4>
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{device.type}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Battery className="w-3 h-3" />
                    {device.battery}%
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <Signal className="w-3 h-3" />
                    {device.signal}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Device */}
      <Button variant="outline" className="w-full bg-transparent">
        <Plus className="w-4 h-4 mr-2" />
        Add New Device
      </Button>

      {/* Compatible Devices */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Compatible Devices</h3>
        <div className="p-4 rounded-xl bg-card/30 border border-border">
          <p className="text-sm text-muted-foreground">
            MindPulse works with Empatica E4, RespiBAN, Apple Watch, Fitbit, Garmin, and most Bluetooth-enabled heart
            rate monitors.
          </p>
        </div>
      </div>
    </div>
  )
}
