
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, FileText, Upload, Sparkles, Clock, Target, Download, Settings } from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"
import loadUser from "@/app/actions/Util"
import { useEffect } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"



export default function DashboardPage() {
  const router = useRouter()
  const [userData, setuserData] = useState<UserData | null>(null)
  useEffect(() => {
    loadUser().then((user) => {
      if (user) {
        setuserData(user)
      }
    })
  }, [])
  
  const FirstName = userData?.firstName
  const LastName = userData?.lastName
  const Email = userData?.email
  return (
    <DashboardLayout >
      <div className="p-6 w-full">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back , {FirstName} {LastName} 👋</h1>
          <p className="text-slate-400">Let's launch your freelance profile and win more clients.</p>
        </div>

        {/* Hero banner */}
        <div className="relative mb-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-br-full" />

          <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Let's launch your freelance profile!
              </h2>
              <p className="text-slate-300 mb-6">
                You're just a few steps away from having optimized profiles across all major freelancing platforms.
                Start by creating your base profile or uploading your CV.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/profile-input">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300">
                  Create Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload CV
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-full flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="mr-2 h-5 w-5 text-purple-400" />
                Profile Status
              </CardTitle>
              <CardDescription>Your base profile completion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-purple-400">40%</span>
                </div>
                <Progress value={40} className="h-2 bg-slate-700" />
                <div className="text-sm text-slate-400">
                  <span className="text-yellow-400">⚠️</span> Complete your profile to unlock all features
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Target className="mr-2 h-5 w-5 text-cyan-400" />
                Platforms Selected
              </CardTitle>
              <CardDescription>Freelance platforms you're targeting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                  F
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                  U
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-700 border border-dashed border-slate-600 flex items-center justify-center text-slate-400 text-xs">
                  +
                </div>
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-green-400">✓</span> 2/5 platforms configured
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5 text-purple-400" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest profile updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5" />
                  <div>
                    <p className="text-slate-300">Updated Upwork profile</p>
                    <p className="text-xs text-slate-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5" />
                  <div>
                    <p className="text-slate-300">Created Fiverr gig description</p>
                    <p className="text-xs text-slate-500">5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick actions and stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/profile-input"
                className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Complete Your Profile</h3>
                    <p className="text-sm text-slate-400">Add your skills, experience, and portfolio</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/generated-content"
                className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/40 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Generate Content</h3>
                    <p className="text-sm text-slate-400">Create platform-optimized profiles</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/export-center"
                className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                    <Download className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Export Your Content</h3>
                    <p className="text-sm text-slate-400">Download or copy to platforms</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/settings"
                className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/40 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Account Settings</h3>
                    <p className="text-sm text-slate-400">Update your preferences</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Your Stats</h2>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm text-slate-400">Profile Views</h3>
                      <span className="text-xs text-green-400">+12%</span>
                    </div>
                    <div className="text-2xl font-bold">127</div>
                    <div className="text-xs text-slate-500">Last 30 days</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm text-slate-400">Client Messages</h3>
                      <span className="text-xs text-green-400">+5%</span>
                    </div>
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs text-slate-500">Last 30 days</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-sm text-slate-400">Profile Strength</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={65}
                        className="h-2 bg-slate-700 flex-1"
                       
                      />
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-700 hover:text-white">
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
