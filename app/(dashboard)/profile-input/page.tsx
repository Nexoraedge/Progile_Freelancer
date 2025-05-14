import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Plus, ArrowRight } from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"

export default function ProfileInputPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile Input</h1>
          <p className="text-slate-400">
            Create your base profile to generate optimized content for multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Enter your basic information to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      placeholder="John Doe"
                      className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="professional-title">Professional Title</Label>
                    <Input
                      id="professional-title"
                      placeholder="Senior Full-Stack Developer"
                      className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="New York, USA"
                    className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">Professional Summary</Label>
                  <Textarea
                    id="about"
                    placeholder="Write a brief summary about your professional background, expertise, and what makes you stand out..."
                    className="min-h-32 bg-slate-900/50 border-slate-700 focus:border-purple-500"
                  />
                  <p className="text-xs text-slate-500">
                    This will be used as the foundation for your platform-specific bios. Be detailed but concise.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
                <CardDescription>Select your technical skills and areas of expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Tech Stack</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS"].map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30 px-3 py-1 flex items-center gap-1"
                      >
                        {skill}
                        <button className="ml-1 hover:text-white">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-dashed border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-slate-300"
                    >
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Add Skill
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">Select up to 10 skills that best represent your expertise</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience-level">Experience Level</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-900/50 border-slate-700 focus:border-purple-500">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                        <SelectItem value="expert">Expert (8+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hourly-rate">Hourly Rate (USD)</Label>
                    <Input
                      id="hourly-rate"
                      type="number"
                      placeholder="50"
                      className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services">Services Offered</Label>
                  <Textarea
                    id="services"
                    placeholder="List the specific services you offer, e.g., Web Application Development, API Integration, UI/UX Implementation..."
                    className="min-h-24 bg-slate-900/50 border-slate-700 focus:border-purple-500"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Portfolio & Experience</CardTitle>
                <CardDescription>Highlight your best work and professional experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="portfolio-url">Portfolio URL</Label>
                  <Input
                    id="portfolio-url"
                    placeholder="https://yourportfolio.com"
                    className="bg-slate-900/50 border-slate-700 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Project Highlights</Label>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-md p-4 space-y-4">
                    <div className="space-y-2">
                      <Input
                        placeholder="Project Title"
                        className="bg-slate-800/50 border-slate-700 focus:border-purple-500"
                      />
                      <Textarea
                        placeholder="Brief description of the project, your role, and key achievements..."
                        className="min-h-20 bg-slate-800/50 border-slate-700 focus:border-purple-500"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-dashed border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-slate-300"
                    >
                      <Plus className="h-3.5 w-3.5 mr-1" />
                      Add Another Project
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Upload CV (Optional)</Label>
                  <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-400 mb-4">Drag and drop your CV/resume here, or click to browse</p>
                    <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
                      Browse Files
                    </Button>
                    <p className="text-xs text-slate-500 mt-4">Supports PDF, DOCX, TXT (Max 5MB)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 sticky top-24">
              <CardHeader>
                <CardTitle>Target Platforms</CardTitle>
                <CardDescription>Select platforms to generate content for</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="fiverr"
                      className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                        F
                      </div>
                      <Label htmlFor="fiverr" className="font-medium cursor-pointer">
                        Fiverr
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="upwork"
                      className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                        U
                      </div>
                      <Label htmlFor="upwork" className="font-medium cursor-pointer">
                        Upwork
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="freelancer"
                      className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-bold text-white text-xs">
                        F
                      </div>
                      <Label htmlFor="freelancer" className="font-medium cursor-pointer">
                        Freelancer
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="toptal"
                      className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                        T
                      </div>
                      <Label htmlFor="toptal" className="font-medium cursor-pointer">
                        Toptal
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="linkedin"
                      className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                        L
                      </div>
                      <Label htmlFor="linkedin" className="font-medium cursor-pointer">
                        LinkedIn
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="font-medium mb-3">Content Generation Options</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="bio"
                        defaultChecked
                        className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor="bio" className="cursor-pointer">
                        Profile Bio
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="gig-title"
                        defaultChecked
                        className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor="gig-title" className="cursor-pointer">
                        Gig/Service Title
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="description"
                        defaultChecked
                        className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor="description" className="cursor-pointer">
                        Description
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="cover-letter"
                        className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor="cover-letter" className="cursor-pointer">
                        Cover Letter Template
                      </Label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300">
                  Generate My Profiles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
