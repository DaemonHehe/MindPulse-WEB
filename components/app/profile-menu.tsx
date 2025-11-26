import Link from "next/link"
import { Settings, Watch, Bell, Shield, HelpCircle, FileText, LogOut, ChevronRight } from "lucide-react"

const menuItems = [
  { icon: Settings, label: "Settings", href: "/profile/settings" },
  { icon: Watch, label: "Connected Devices", href: "/profile/devices" },
  { icon: Bell, label: "Notifications", href: "/profile/notifications" },
  { icon: Shield, label: "Privacy & Security", href: "/profile/privacy" },
  { icon: HelpCircle, label: "Help & Support", href: "/profile/help" },
  { icon: FileText, label: "About MindPulse", href: "/profile/about" },
]

export function ProfileMenu() {
  return (
    <div className="space-y-2">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center justify-between p-4 rounded-xl bg-card/30 hover:bg-card/50 border border-border transition-colors"
        >
          <div className="flex items-center gap-3">
            <item.icon className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground">{item.label}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </Link>
      ))}

      <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors mt-4">
        <LogOut className="w-5 h-5 text-red-400" />
        <span className="text-red-400">Log Out</span>
      </button>
    </div>
  )
}
