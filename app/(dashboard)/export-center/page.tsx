"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Copy,
  FileText,
  FileCode,
  FileBadge,
  Share2,
  Save,
  Clipboard,
  CheckCircle2,
  ExternalLink,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  ArrowRight,
  AlertCircle,
} from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"

export default function ExportCenterPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [copied, setCopied] = useState(false)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [exportSuccess, setExportSuccess] = useState<string | null>(null)
  const [exportError, setExportError] = useState<string | null>(null)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExport = (type: string) => {
    setExportSuccess(`Content successfully exported as ${type}!`)
    setTimeout(() => setExportSuccess(null), 3000)
  }

  const handleShare = () => {
    setShowShareDialog(false)
    setExportSuccess("Share link created and copied to clipboard!")
    setTimeout(() => setExportSuccess(null), 3000)
  }

  const handleSaveTemplate = () => {
    setShowSaveDialog(false)
    setExportSuccess("Template saved successfully!")
    setTimeout(() => setExportSuccess(null), 3000)
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Export Center
          </h1>
          <p className="text-slate-400">
            Export your generated content in various formats or copy directly to platforms
          </p>
        </div>

        {exportSuccess && (
          <div className="mb-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span>{exportSuccess}</span>
          </div>
        )}

        {exportError && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400">
            <AlertCircle className="h-5 w-5" />
            <span>{exportError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 shadow-lg shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Export Options
                  </span>
                  <Badge variant="outline" className="ml-2 border-purple-500/50 text-purple-400">
                    Premium
                  </Badge>
                </CardTitle>
                <CardDescription>Choose how you want to export your content</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
                  <TabsList className="bg-slate-900/50 w-full grid grid-cols-4">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300"
                    >
                      All Content
                    </TabsTrigger>
                    <TabsTrigger
                      value="fiverr"
                      className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300"
                    >
                      Fiverr
                    </TabsTrigger>
                    <TabsTrigger
                      value="upwork"
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300"
                    >
                      Upwork
                    </TabsTrigger>
                    <TabsTrigger
                      value="freelancer"
                      className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300"
                    >
                      Freelancer
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-auto py-6 border-slate-700 hover:border-purple-500 hover:bg-slate-800 flex flex-col items-center justify-center gap-2 group transition-all duration-300"
                        onClick={() => handleExport("PDF")}
                      >
                        <FileText className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
                        <div className="text-center">
                          <div className="font-medium">Export as PDF</div>
                          <div className="text-xs text-slate-400">Professional document format</div>
                        </div>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 border-slate-700 hover:border-cyan-500 hover:bg-slate-800 flex flex-col items-center justify-center gap-2 group transition-all duration-300"
                        onClick={() => handleExport("Markdown")}
                      >
                        <FileCode className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div className="text-center">
                          <div className="font-medium">Export as Markdown</div>
                          <div className="text-xs text-slate-400">Formatted text with markup</div>
                        </div>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 border-slate-700 hover:border-purple-500 hover:bg-slate-800 flex flex-col items-center justify-center gap-2 group transition-all duration-300"
                        onClick={() => handleExport("Notion")}
                      >
                        <FileBadge className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
                        <div className="text-center">
                          <div className="font-medium">Export to Notion</div>
                          <div className="text-xs text-slate-400">Send directly to your workspace</div>
                        </div>
                      </Button>

                      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="h-auto py-6 border-slate-700 hover:border-cyan-500 hover:bg-slate-800 flex flex-col items-center justify-center gap-2 group transition-all duration-300"
                          >
                            <Share2 className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <div className="text-center">
                              <div className="font-medium">Share Link</div>
                              <div className="text-xs text-slate-400">Create shareable link</div>
                            </div>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-900 border-slate-700">
                          <DialogHeader>
                            <DialogTitle>Share Your Content</DialogTitle>
                            <DialogDescription>
                              Create a shareable link to your content that expires after a set time.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="link-expiry">Link Expiry</Label>
                              <select
                                id="link-expiry"
                                className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                              >
                                <option value="1">1 day</option>
                                <option value="7">7 days</option>
                                <option value="30">30 days</option>
                                <option value="never">Never expires</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="share-permissions">Permissions</Label>
                              <select
                                id="share-permissions"
                                className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                              >
                                <option value="view">View only</option>
                                <option value="copy">View and copy</option>
                                <option value="edit">View and edit</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="share-message">Optional Message</Label>
                              <Textarea
                                id="share-message"
                                placeholder="Add a message to recipients..."
                                className="bg-slate-800 border border-slate-700 focus:border-purple-500"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setShowShareDialog(false)}>
                              Cancel
                            </Button>
                            <Button
                              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                              onClick={handleShare}
                            >
                              Create Share Link
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="pt-4 border-t border-slate-700">
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 py-6 h-auto"
                        onClick={() => handleExport("ZIP")}
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Download All Content as ZIP
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="fiverr" className="space-y-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center">
                            <span className="text-green-400">Fiverr Content</span>
                            <Badge
                              className="ml-2 bg-green-500/20 text-green-400 border-green-500/30"
                              variant="outline"
                            >
                              Ready
                            </Badge>
                          </h3>
                          <p className="text-sm text-slate-400">All your generated Fiverr content</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 hover:bg-slate-800 hover:text-white"
                          onClick={handleCopy}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Gig Title</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-md p-2 text-sm">
                            I will create professional, responsive React applications with modern UI/UX
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Profile Bio</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-md p-2 text-sm max-h-32 overflow-y-auto">
                            Senior Full-Stack Developer with 7+ years of experience specializing in React, Node.js, and
                            modern web technologies. I've helped 50+ clients transform their ideas into polished,
                            high-performing applications that users love.
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Service Description</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-md p-2 text-sm max-h-32 overflow-y-auto">
                            I will build you a modern, responsive React application with clean code and exceptional
                            UI/UX. With 7+ years of experience in web development, I deliver high-quality solutions that
                            meet your business needs and exceed your expectations. What you'll get: ✅ Custom React
                            application built from scratch ✅ Responsive design that works on all devices ✅ Clean,
                            well-documented code ✅ Fast loading times and optimized performance ✅ SEO-friendly
                            implementation ✅ Regular updates and communication throughout the process
                          </div>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Open Fiverr
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => handleExport("Fiverr PDF")}
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download as PDF
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => setShowSaveDialog(true)}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            Save Template
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="upwork" className="space-y-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center">
                            <span className="text-cyan-400">Upwork Content</span>
                            <Badge className="ml-2 bg-cyan-500/20 text-cyan-400 border-cyan-500/30" variant="outline">
                              Ready
                            </Badge>
                          </h3>
                          <p className="text-sm text-slate-400">All your generated Upwork content</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 hover:bg-slate-800 hover:text-white"
                          onClick={handleCopy}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Job Title</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-2 text-sm">
                            Senior React Developer | Full-Stack JavaScript Expert | Next.js Specialist
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Overview</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-2 text-sm max-h-32 overflow-y-auto">
                            Results-driven Full-Stack Developer with 7+ years of experience building scalable web
                            applications that drive business growth. I specialize in React, Node.js, and modern
                            JavaScript frameworks to deliver high-quality, performant solutions.
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Proposal Template</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-2 text-sm max-h-32 overflow-y-auto">
                            Hi [Client Name], I read your job posting for a React developer with great interest. With 7+
                            years of experience building React applications and full-stack solutions, I'm confident I
                            can deliver exactly what you need. My relevant experience includes: • Building 20+ React
                            applications from scratch • Implementing complex state management with Redux/Context API •
                            Creating responsive, mobile-first designs • Integrating with RESTful APIs and GraphQL •
                            Setting up CI/CD pipelines for seamless deployment I'd love to discuss your project in more
                            detail. When would be a good time to connect? Looking forward to your response, [Your Name]
                          </div>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-2">
                          <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Open Upwork
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => handleExport("Upwork PDF")}
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download as PDF
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => setShowSaveDialog(true)}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            Save Template
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="freelancer" className="space-y-4">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center">
                            <span className="text-orange-400">Freelancer Content</span>
                            <Badge
                              className="ml-2 bg-orange-500/20 text-orange-400 border-orange-500/30"
                              variant="outline"
                            >
                              Ready
                            </Badge>
                          </h3>
                          <p className="text-sm text-slate-400">All your generated Freelancer.com content</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 hover:bg-slate-800 hover:text-white"
                          onClick={handleCopy}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Profile Title</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-2 text-sm">
                            Expert React & Full-Stack Developer | 7+ Years Experience | 100% Client Satisfaction
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Profile Description</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-2 text-sm max-h-32 overflow-y-auto">
                            Top-rated Full-Stack Developer specializing in React and modern JavaScript frameworks with
                            7+ years of professional experience. I've successfully delivered 100+ projects for clients
                            across various industries, from startups to enterprise companies.
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm text-slate-400">Skills</Label>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs text-slate-400 hover:text-white"
                              onClick={handleCopy}
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-2 text-sm">
                            <div className="flex flex-wrap gap-2">
                              {[
                                "React.js",
                                "Node.js",
                                "JavaScript",
                                "TypeScript",
                                "Next.js",
                                "Redux",
                                "REST API",
                                "MongoDB",
                                "Express.js",
                                "Responsive Design",
                                "UI/UX",
                                "AWS",
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 bg-orange-500/10 text-orange-300 rounded-md text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-2">
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Open Freelancer
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => handleExport("Freelancer PDF")}
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download as PDF
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 hover:bg-slate-800 hover:text-white"
                            onClick={() => setShowSaveDialog(true)}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            Save Template
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 shadow-lg shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  One-Click Copy
                </CardTitle>
                <CardDescription>Copy all content with a single click</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={handleCopy}>
                        {copied ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clipboard className="h-4 w-4 text-slate-400" />
                        )}
                      </Button>
                    </div>
                    <div className="space-y-4 pr-8">
                      <div>
                        <h3
                          className="text-sm font-medium mb-1"
                          style={{
                            color:
                              activeTab === "fiverr"
                                ? "#4ade80"
                                : activeTab === "upwork"
                                  ? "#22d3ee"
                                  : activeTab === "freelancer"
                                    ? "#fb923c"
                                    : "#a78bfa",
                          }}
                        >
                          {activeTab === "fiverr"
                            ? "Fiverr"
                            : activeTab === "upwork"
                              ? "Upwork"
                              : activeTab === "freelancer"
                                ? "Freelancer"
                                : "All Platforms"}{" "}
                          Content
                        </h3>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> Last generated: May 15, 2025
                          <Clock className="h-3 w-3 ml-2" /> 12:10 AM
                        </div>
                      </div>
                      <div className="max-h-48 overflow-y-auto text-sm text-slate-300 space-y-3">
                        <p>
                          <strong>Profile Title:</strong> Senior React Developer | Full-Stack JavaScript Expert |
                          Next.js Specialist
                        </p>
                        <p>
                          <strong>Bio:</strong> Senior Full-Stack Developer with 7+ years of experience specializing in
                          React, Node.js, and modern web technologies. I've helped 50+ clients transform their ideas
                          into polished, high-performing applications that users love.
                        </p>
                        <p>
                          <strong>Skills:</strong> React.js, Node.js, JavaScript, TypeScript, Next.js, Redux, REST API,
                          MongoDB, Express.js, Responsive Design, UI/UX, AWS
                        </p>
                        <p>
                          <strong>Description:</strong> Results-driven Full-Stack Developer with 7+ years of experience
                          building scalable web applications that drive business growth. I specialize in creating
                          robust, high-performance applications using React, Node.js, and modern JavaScript
                          frameworks...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="border-slate-700 hover:bg-slate-800 hover:text-white"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All Content
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 hover:bg-slate-800 hover:text-white"
                      onClick={() => setShowSaveDialog(true)}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save as Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 shadow-lg shadow-purple-500/5 ">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Saved Templates
                </CardTitle>
                <CardDescription>Your saved content templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium group-hover:text-purple-400 transition-colors">
                      React Developer Template
                    </h3>
                    <div className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs">All Platforms</div>
                  </div>
                  <p className="text-sm text-slate-400 mb-3 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Created May 8, 2025
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={handleCopy}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={() => handleExport("Template")}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-white ml-auto">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-red-400">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium group-hover:text-cyan-400 transition-colors">Upwork Proposal</h3>
                    <div className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-xs">Upwork</div>
                  </div>
                  <p className="text-sm text-slate-400 mb-3 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Created May 5, 2025
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={handleCopy}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={() => handleExport("Template")}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-white ml-auto">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-red-400">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-orange-500/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium group-hover:text-orange-400 transition-colors">Freelancer Profile</h3>
                    <div className="px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded text-xs">Freelancer</div>
                  </div>
                  <p className="text-sm text-slate-400 mb-3 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Created May 12, 2025
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={handleCopy}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs text-slate-400 hover:text-white"
                      onClick={() => handleExport("Template")}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-white ml-auto">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-400 hover:text-red-400">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-dashed border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-slate-300"
                    >
                      <Plus className="h-4 w-4 mr-2" /> Save Current as Template
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle>Save as Template</DialogTitle>
                      <DialogDescription>Save your current content as a reusable template.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="template-name">Template Name</Label>
                        <Input
                          id="template-name"
                          placeholder="E.g., React Developer Profile"
                          className="bg-slate-800 border-slate-700 focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="template-platform">Platform</Label>
                        <select
                          id="template-platform"
                          className="w-full bg-slate-800 border border-slate-700 rounded-md p-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                        >
                          <option value="all">All Platforms</option>
                          <option value="fiverr">Fiverr</option>
                          <option value="upwork">Upwork</option>
                          <option value="freelancer">Freelancer</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="template-description">Description (Optional)</Label>
                        <Textarea
                          id="template-description"
                          placeholder="Add a description for this template..."
                          className="bg-slate-800 border-slate-700 focus:border-purple-500"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="template-favorite"
                          className="rounded border-slate-700 text-purple-500 focus:ring-purple-500"
                        />
                        <Label htmlFor="template-favorite" className="text-sm">
                          Mark as favorite
                        </Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
                        Cancel
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
                        onClick={handleSaveTemplate}
                      >
                        Save Template
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 shadow-lg shadow-purple-500/5">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Export History
                </CardTitle>
                <CardDescription>Your recent export activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded">
                      <FileText className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">All Content PDF</p>
                      <p className="text-xs text-slate-400">May 15, 2025 • 11:45 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded">
                      <FileText className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fiverr Content</p>
                      <p className="text-xs text-slate-400">May 14, 2025 • 3:20 PM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="bg-cyan-500/20 p-2 rounded">
                      <Share2 className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Shared Link</p>
                      <p className="text-xs text-slate-400">May 12, 2025 • 9:15 AM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/20 p-2 rounded">
                      <FileCode className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Freelancer Markdown</p>
                      <p className="text-xs text-slate-400">May 10, 2025 • 2:30 PM</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" className="w-full mt-2 border-slate-700 hover:bg-slate-800">
                  View All History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
