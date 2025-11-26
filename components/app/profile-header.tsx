import { Camera, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
            <span className="text-3xl font-bold text-foreground">JD</span>
          </div>
        </div>
        <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <Camera className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
      <h2 className="text-xl font-bold text-foreground mt-4">John Doe</h2>
      <p className="text-sm text-muted-foreground">john.doe@email.com</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Premium Member</span>
        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">14 day streak</span>
      </div>
      <Button variant="outline" size="sm" className="mt-4 bg-transparent">
        <Edit2 className="w-4 h-4 mr-2" />
        Edit Profile
      </Button>
    </div>
  )
}
