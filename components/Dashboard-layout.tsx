"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  FileInput,
  FileOutput,
  Download,
  Settings,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Profile Input", href: "/profile-input", icon: FileInput },
    { name: "Generated Content", href: "/generated-content", icon: FileOutput },
    { name: "Export Center", href: "/export-center", icon: Download },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen relative top-0 bg-gradient-to-b overflow-y-auto from-slate-950 to-slate-900 text-slate-100">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex sticky top-0 z-50 flex-col min-h-screen">
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">FPL</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                FP Launcher
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 py-6 overflow-y-auto">
            <nav className="px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-slate-800">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Free Plan</div>
                  <div className="text-xs text-slate-400">2/5 profiles used</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-700 hover:bg-slate-800 hover:text-white text-xs"
              >
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 absolute top-0  flex flex-col min-h-screen lg:pl-64">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold hidden sm:block">Freelancer Profile Launcher</h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:bg-slate-800/50">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback className="bg-slate-700 text-slate-200">JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-sm font-medium text-left">
                      <div>John Doe</div>
                      <div className="text-xs text-slate-400">john@example.com</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700 text-slate-200">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 cursor-pointer text-red-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
