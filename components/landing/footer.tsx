"use client"

import { Activity, Github, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Activity className="h-6 w-6 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/50 -z-10" />
            </div>
            <span className="text-lg font-bold text-foreground">MindPulse</span>
          </div>

          {/* Attribution */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Built as part of an academic research project</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-400" /> for wellness innovation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MindPulse. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
