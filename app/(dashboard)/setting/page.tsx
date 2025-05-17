"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  User,
  Lock,
  Bell,
  CreditCard,
  LogOut,
  Upload,
  Moon,
  Sun,
  Trash2,
  Shield,
  Globe,
  Palette,
  LinkIcon,
} from "lucide-react"

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 premium-text">Settings</h1>
          <p className="text-slate-400">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-8">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-1">
            <TabsList className="w-full grid grid-cols-5 bg-transparent h-auto p-0">
              <TabsTrigger
                value="profile"
                className="py-3 rounded-md data-[state=active]:bg-slate-800/70 data-[state=active]:shadow-none"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="py-3 rounded-md data-[state=active]:bg-slate-800/70 data-[state=active]:shadow-none"
              >
                <Lock className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="py-3 rounded-md data-[state=active]:bg-slate-800/70 data-[state=active]:shadow-none"
              >
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="py-3 rounded-md data-[state=active]:bg-slate-800/70 data-[state=active]:shadow-none"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="py-3 rounded-md data-[state=active]:bg-slate-800/70 data-[state=active]:shadow-none"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                      <AvatarFallback className="bg-slate-700 text-slate-200 text-xl">JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="premium-button-outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" className="premium-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" className="premium-input" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" className="premium-input" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="Senior Full-Stack Developer with 7+ years of experience specializing in React, Node.js, and modern web technologies."
                        className="min-h-24 premium-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="New York, USA" className="premium-input" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 rounded-l-md border border-r-0 border-slate-700 bg-slate-800/50">
                      <Globe className="h-4 w-4 text-slate-400" />
                    </div>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      className="rounded-l-none premium-input"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="premium-button">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
                <CardDescription>Manage your connected accounts and services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                      F
                    </div>
                    <div>
                      <h3 className="font-medium">Fiverr</h3>
                      <p className="text-sm text-slate-400">Connected on May 10, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    Disconnect
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                      U
                    </div>
                    <div>
                      <h3 className="font-medium">Upwork</h3>
                      <p className="text-sm text-slate-400">Connected on May 8, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    Disconnect
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                      <LinkIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Connect Another Platform</h3>
                      <p className="text-sm text-slate-400">Add more freelancing platforms</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" placeholder="••••••••" className="premium-input" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="••••••••" className="premium-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" className="premium-input" />
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="premium-button">Update Password</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-violet-400 mr-2" />
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                    </div>
                    <p className="text-sm text-slate-400">Protect your account with 2FA</p>
                  </div>
                  <Switch />
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <Button variant="outline" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    Set Up Two-Factor Authentication
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle className="text-red-400">Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-950/20 rounded-lg border border-red-900/30">
                  <div>
                    <h3 className="font-medium text-red-400">Delete Account</h3>
                    <p className="text-sm text-slate-400">Permanently delete your account and all associated data</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-slate-900 border-slate-800">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove all your
                          data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-slate-700 hover:bg-slate-800 hover:text-white">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
                          Delete Account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div>
                    <h3 className="font-medium">Log Out of All Devices</h3>
                    <p className="text-sm text-slate-400">Sign out from all devices where you're currently logged in</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Theme</CardTitle>
                <CardDescription>Customize the appearance of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      {isDarkMode ? (
                        <Moon className="h-5 w-5 text-violet-400 mr-2" />
                      ) : (
                        <Sun className="h-5 w-5 text-amber-400 mr-2" />
                      )}
                      <h3 className="font-medium">Dark Mode</h3>
                    </div>
                    <p className="text-sm text-slate-400">
                      {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    </p>
                  </div>
                  <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="border border-violet-500/30 rounded-lg p-4 bg-slate-800/50 flex flex-col items-center">
                    <div className="w-full h-24 mb-4 rounded-md bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-cyan-600/20 border border-violet-500/20"></div>
                    <h3 className="font-medium text-sm">Premium Dark</h3>
                    <p className="text-xs text-slate-400 text-center mt-1">Current theme</p>
                  </div>
                  <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/30 flex flex-col items-center">
                    <div className="w-full h-24 mb-4 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-slate-700"></div>
                    <h3 className="font-medium text-sm">Midnight</h3>
                    <p className="text-xs text-slate-400 text-center mt-1">Coming soon</p>
                  </div>
                  <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/30 flex flex-col items-center">
                    <div className="w-full h-24 mb-4 rounded-md bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 border border-slate-700"></div>
                    <h3 className="font-medium text-sm">Ocean</h3>
                    <p className="text-xs text-slate-400 text-center mt-1">Coming soon</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="font-medium mb-4">Accent Color</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 ring-2 ring-offset-2 ring-offset-slate-900 ring-violet-500/50"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Display Settings</CardTitle>
                <CardDescription>Customize your viewing experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Reduce Motion</h3>
                    <p className="text-sm text-slate-400">Minimize animations and transitions</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Compact Mode</h3>
                    <p className="text-sm text-slate-400">Reduce spacing between elements</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">High Contrast</h3>
                    <p className="text-sm text-slate-400">Increase contrast for better visibility</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-sm text-slate-400 uppercase">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Profile Updates</h4>
                        <p className="text-sm text-slate-400">Receive emails about your profile performance</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New Features</h4>
                        <p className="text-sm text-slate-400">Get notified about new features and updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tips & Tutorials</h4>
                        <p className="text-sm text-slate-400">Receive tips to optimize your freelance profiles</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700 space-y-4">
                  <h3 className="font-medium text-sm text-slate-400 uppercase">In-App Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Profile Generation Complete</h4>
                        <p className="text-sm text-slate-400">When your AI-generated profiles are ready</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Platform Updates</h4>
                        <p className="text-sm text-slate-400">When freelance platforms change their requirements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Subscription Reminders</h4>
                        <p className="text-sm text-slate-400">Reminders about your subscription status</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <Button className="premium-button">Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 premium-border">
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-br from-violet-900/30 to-indigo-900/30 border border-violet-500/30 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-sm font-medium text-violet-300 mb-2">
                        Free Plan
                      </div>
                      <h3 className="text-xl font-bold mb-1">Basic Access</h3>
                      <p className="text-slate-400">2/5 profiles used this month</p>
                    </div>
                    <Button className="premium-button">Upgrade to Pro</Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="font-medium mb-4">Available Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <div className="font-medium mb-1">Free</div>
                      <div className="text-2xl font-bold mb-1">$0</div>
                      <div className="text-sm text-slate-400 mb-3">Limited access</div>
                      <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800 hover:text-white">
                        Current Plan
                      </Button>
                    </div>
                    <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/30 rounded-lg p-4 relative premium-glow">
                      <div className="absolute -top-3 right-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full px-3 py-1 text-xs font-medium text-white">
                        Popular
                      </div>
                      <div className="font-medium mb-1">Pro</div>
                      <div className="text-2xl font-bold mb-1">$12.99</div>
                      <div className="text-sm text-slate-400 mb-3">Monthly billing</div>
                      <Button className="w-full premium-button">Upgrade</Button>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <div className="font-medium mb-1">Lifetime</div>
                      <div className="text-2xl font-bold mb-1">$199</div>
                      <div className="text-sm text-slate-400 mb-3">One-time payment</div>
                      <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800 hover:text-white">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="font-medium mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <path d="M7 15h10" stroke="black" strokeWidth="1.5" />
                            <path d="M7 11h2" stroke="black" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Add Payment Method</div>
                          <div className="text-sm text-slate-400">Credit card, PayPal, or bank account</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 hover:bg-slate-800 hover:text-white"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="font-medium mb-4">Billing History</h3>
                  <div className="text-center py-6 text-slate-400">
                    <p>No billing history available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
