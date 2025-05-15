"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Upload,
  X,
  Plus,
  ArrowRight,
  Info,
  Globe,
  DollarSign,
  Clock,
  FileText,
  LinkIcon,
  Briefcase,
  Code,
  Languages,
  Sparkles,
} from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"
// Sample data for dropdowns and multi-selects
import { skillOptions , languageOptions , fluencyLevels , serviceCategories } from "@/constants/util"




export default function ProfileInputPage() {
  
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<{ language: string; fluency: string }[]>([])
  const [newLanguage, setNewLanguage] = useState("")
  const [newLanguageFluency, setNewLanguageFluency] = useState("Conversational")
  const [services, setServices] = useState<string[]>([])
  const [newService, setNewService] = useState("")
  const [hourlyRate, setHourlyRate] = useState([50])
  const [weeklyHours, setWeeklyHours] = useState([40])
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  // Handlers for form inputs
  const addSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  const addLanguage = () => {
    if (newLanguage && !selectedLanguages.some((l) => l.language === newLanguage)) {
      setSelectedLanguages([
        ...selectedLanguages,
        {
          language: newLanguage,
          fluency: newLanguageFluency,
        },
      ])
      setNewLanguage("")
    }
  }

  const removeLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l.language !== language))
  }

  const addService = () => {
    if (newService && !services.includes(newService)) {
      setServices([...services, newService])
      setNewService("")
    }
  }

  const removeService = (service: string) => {
    setServices(services.filter((s) => s !== service))
  }

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const removeResume = () => {
    setResumeFile(null)
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 premium-text">Complete Your Freelancer Profile</h1>
          <p className="text-slate-400">
            Fill in the details below to generate optimized profiles for multiple freelancing platforms
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Information */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-violet-400" />
                    <CardTitle>Professional Information</CardTitle>
                  </div>
                  <CardDescription>Tell clients about your professional background</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="role" className="flex items-center gap-1">
                        Your Role <span className="text-red-500">*</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-3.5 w-3.5 text-slate-400 cursor-help ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-60">Your professional title that will appear on your profile</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Input id="role" placeholder="e.g. Full Stack Developer" className="premium-input" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience-level" className="flex items-center gap-1">
                        Experience Level <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="premium-input">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                          <SelectItem value="expert">Expert (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="years-experience" className="flex items-center gap-1">
                        Years of Experience <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="premium-input">
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {Array.from({ length: 20 }, (_, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1} {i === 0 ? "year" : "years"}
                            </SelectItem>
                          ))}
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-1">
                        Location
                      </Label>
                      <Input id="location" placeholder="e.g. New York, USA" className="premium-input" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="professional-summary" className="flex items-center gap-1">
                      Professional Summary <span className="text-red-500">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 text-slate-400 cursor-help ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">
                              A brief overview of your professional background, expertise, and what makes you unique
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Textarea
                      id="professional-summary"
                      placeholder="Write a brief summary about your professional background, expertise, and what makes you stand out..."
                      className="min-h-32 premium-input"
                      required
                    />
                    <p className="text-xs text-slate-500">
                      This will be used as the foundation for your platform-specific bios. Be detailed but concise
                      (150-300 words recommended).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Services */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-violet-400" />
                    <CardTitle>Skills & Services</CardTitle>
                  </div>
                  <CardDescription>Showcase your technical skills and service offerings</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="skills" className="flex items-center gap-1">
                      Skills / Tech Stack <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedSkills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30 px-3 py-1 flex items-center gap-1"
                        >
                          {skill}
                          <button type="button" className="ml-1 hover:text-white" onClick={() => removeSkill(skill)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Select onValueChange={setNewSkill}>
                        <SelectTrigger className="premium-input flex-1">
                          <SelectValue placeholder="Select or type a skill" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-[300px]">
                          {skillOptions.map((skill) => (
                            <SelectItem key={skill} value={skill}>
                              {skill}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button type="button" onClick={addSkill} className="premium-button-outline" disabled={!newSkill}>
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">Select up to 15 skills that best represent your expertise</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services" className="flex items-center gap-1">
                      Services Offered <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30 px-3 py-1 flex items-center gap-1"
                        >
                          {service}
                          <button
                            type="button"
                            className="ml-1 hover:text-white"
                            onClick={() => removeService(service)}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Select onValueChange={setNewService}>
                        <SelectTrigger className="premium-input flex-1">
                          <SelectValue placeholder="Select or type a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 max-h-[300px]">
                          {serviceCategories.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        onClick={addService}
                        className="premium-button-outline"
                        disabled={!newService}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">List the specific services you offer to clients</p>
                  </div>
                </CardContent>
              </Card>

              {/* Communication */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700">
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Languages className="h-5 w-5 text-violet-400" />
                    <CardTitle>Communication</CardTitle>
                  </div>
                  <CardDescription>Languages you speak and communication preferences</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="languages" className="flex items-center gap-1">
                      Languages You Speak <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedLanguages.map((lang) => (
                        <Badge
                          key={lang.language}
                          className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border-indigo-500/30 px-3 py-1 flex items-center gap-1"
                        >
                          {lang.language} ({lang.fluency})
                          <button
                            type="button"
                            className="ml-1 hover:text-white"
                            onClick={() => removeLanguage(lang.language)}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="md:col-span-2">
                        <Select onValueChange={setNewLanguage}>
                          <SelectTrigger className="premium-input">
                            <SelectValue placeholder="Select a language" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700 max-h-[300px]">
                            {languageOptions.map((language) => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Select defaultValue="Conversational" onValueChange={setNewLanguageFluency}>
                        <SelectTrigger className="premium-input">
                          <SelectValue placeholder="Fluency" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          {fluencyLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button
                        type="button"
                        onClick={addLanguage}
                        className="premium-button-outline"
                        disabled={!newLanguage}
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add Language
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">
                      Add all languages you can communicate in with their fluency level
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="communication-style" className="flex items-center gap-1">
                      Communication Style
                    </Label>
                    <Textarea
                      id="communication-style"
                      placeholder="Describe your communication style, availability for meetings, preferred contact methods..."
                      className="min-h-24 premium-input"
                    />
                    <p className="text-xs text-slate-500">
                      This helps clients understand how you prefer to communicate during projects
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio & Links */}
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
              {/* Freelancer Preferences */}
              <Card className="premium-card premium-border bg-slate-800/50 border-slate-700 sticky top-24">
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-violet-400" />
                    <CardTitle>Freelancer Preferences</CardTitle>
                  </div>
                  <CardDescription>Set your rates, availability, and platform preferences</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6">
                  <div className="space-y-4">
                    <Label className="flex items-center gap-1">
                      Preferred Platforms <span className="text-red-500">*</span>
                    </Label>
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
                            Freelancer.com
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="hourly-rate" className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-slate-400" />
                          Hourly Rate (USD) <span className="text-red-500">*</span>
                        </Label>
                        <span className="text-lg font-medium text-white">${hourlyRate[0]}</span>
                      </div>
                      <Slider
                        id="hourly-rate"
                        min={5}
                        max={200}
                        step={5}
                        value={hourlyRate}
                        onValueChange={setHourlyRate}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>$5</span>
                        <span>$200+</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="weekly-hours" className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-slate-400" />
                          Available Weekly Hours <span className="text-red-500">*</span>
                        </Label>
                        <span className="text-lg font-medium text-white">{weeklyHours[0]} hrs</span>
                      </div>
                      <Slider
                        id="weekly-hours"
                        min={5}
                        max={60}
                        step={5}
                        value={weeklyHours}
                        onValueChange={setWeeklyHours}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>5 hrs</span>
                        <span>60 hrs</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <Globe className="h-4 w-4 text-slate-400" />
                        Work Preferences
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remote"
                            defaultChecked
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="remote" className="text-sm cursor-pointer">
                            Remote
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="onsite"
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="onsite" className="text-sm cursor-pointer">
                            On-site
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="short-term"
                            defaultChecked
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="short-term" className="text-sm cursor-pointer">
                            Short-term
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="long-term"
                            defaultChecked
                            className="border-slate-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                          />
                          <Label htmlFor="long-term" className="text-sm cursor-pointer">
                            Long-term
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-700">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">Additional Options</Label>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="cover-letter" className="text-sm cursor-pointer">
                            Generate Cover Letter Templates
                          </Label>
                          <Switch id="cover-letter" className="data-[state=checked]:bg-purple-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="proposal-templates" className="text-sm cursor-pointer">
                            Create Proposal Templates
                          </Label>
                          <Switch id="proposal-templates" className="data-[state=checked]:bg-purple-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="optimize-seo" className="text-sm cursor-pointer">
                            Optimize for Platform SEO
                          </Label>
                          <Switch id="optimize-seo" defaultChecked className="data-[state=checked]:bg-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full premium-button">
                    Generate My Profiles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
