"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"
import {
  Copy,
  RefreshCw,
  Download,
  CheckCircle,
  FileText,
  User,
  Briefcase,
  Code,
  MessageSquare,
  FileSpreadsheet,
  Tag,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react"

// You would import your platform content from your actual constants file
// This is just a placeholder for the example
import { platformContent } from "@/constants/util"

// Define types for better type safety
interface PortfolioProject {
  title: string
  description: string
  link: string
}

interface PlatformContent {
  bio: string
  skills: string[]
  services: string[]
  coverLetter: string
  proposal: string
  keywords: string[]
  portfolio: PortfolioProject[]
}

type PlatformType = "fiverr" | "upwork" | "freelancer"
type SectionType = "bio" | "skills" | "services" | "coverLetter" | "proposal" | "keywords" | "portfolio"

export default function GeneratedContentPage() {
  const [activeTab, setActiveTab] = useState<PlatformType>("fiverr")
  const [activeSection, setActiveSection] = useState<SectionType>("bio")
  
  // Create refs for each section for scrolling
  const sectionRefs = {
    bio: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    coverLetter: useRef<HTMLDivElement>(null),
    proposal: useRef<HTMLDivElement>(null),
    keywords: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
  }

  const [copiedSections, setCopiedSections] = useState<Record<string, boolean>>({})

  const handleCopy = (text: string, section: SectionType) => {
    navigator.clipboard.writeText(text).then(() => {
      // Set this section as copied
      setCopiedSections((prev) => ({ ...prev, [section]: true }))

      // Show toast notification using Sonner
      toast.success(`Copied to clipboard`, {
        description: section.charAt(0).toUpperCase() + section.slice(1),
        duration: 2000,
      })

      // Reset copied status after 2 seconds
      setTimeout(() => {
        setCopiedSections((prev) => ({ ...prev, [section]: false }))
      }, 2000)
    }).catch(() => {
      toast.error("Failed to copy to clipboard")
    })
  }

  const scrollToSection = (sectionId: SectionType) => {
    setActiveSection(sectionId)
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleRegenerate = () => {
    toast.loading(`Regenerating content for ${activeTab}`, {
      duration: 3000,
    })
    // Here you would implement the actual regeneration logic
  }

  const handleDownload = (format: string) => {
    toast.success(`Downloading content`, {
      description: `${format.toUpperCase()} format for ${activeTab}`,
      duration: 2000,
    })
    // Here you would implement the actual download logic
  }

  // Define color themes for platforms
  const platformTheme = {
    fiverr: {
      accentColor: "green",
      bgClass: "bg-green-500/10",
      borderClass: "border-green-500/30",
      hoverBgClass: "hover:bg-green-500/15",
      badgeBgClass: "bg-green-500/20",
      badgeHoverClass: "hover:bg-green-500/30",
      badgeTextClass: "text-green-300",
      badgeBorderClass: "border-green-500/30",
      iconClass: "text-green-400",
      linkClass: "text-green-400 hover:text-green-300",
      activeGradient: "data-[state=active]:from-green-500/20 data-[state=active]:to-green-500/10",
    },
    upwork: {
      accentColor: "cyan",
      bgClass: "bg-cyan-500/10",
      borderClass: "border-cyan-500/30",
      hoverBgClass: "hover:bg-cyan-500/15",
      badgeBgClass: "bg-cyan-500/20",
      badgeHoverClass: "hover:bg-cyan-500/30",
      badgeTextClass: "text-cyan-300",
      badgeBorderClass: "border-cyan-500/30",
      iconClass: "text-cyan-400",
      linkClass: "text-cyan-400 hover:text-cyan-300",
      activeGradient: "data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-500/10",
    },
    freelancer: {
      accentColor: "orange",
      bgClass: "bg-orange-500/10",
      borderClass: "border-orange-500/30",
      hoverBgClass: "hover:bg-orange-500/15",
      badgeBgClass: "bg-orange-500/20",
      badgeHoverClass: "hover:bg-orange-500/30",
      badgeTextClass: "text-orange-300",
      badgeBorderClass: "border-orange-500/30",
      iconClass: "text-orange-400",
      linkClass: "text-orange-400 hover:text-orange-300",
      activeGradient: "data-[state=active]:from-orange-500/20 data-[state=active]:to-orange-500/10",
    },
  }

  // Get the theme for the active platform
  const theme = platformTheme[activeTab]

  return (
    <>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">Generated Content</h1>
            <p className="text-slate-400">Review and customize your AI-generated profiles for each platform</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-slate-700 hover:bg-slate-800 hover:text-white flex-shrink-0"
              onClick={handleRegenerate}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate All
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-slate-700 hover:bg-slate-800 hover:text-white flex-shrink-0"
                    onClick={() => handleDownload("txt")}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Download as TXT
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download all content as a text file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white flex-shrink-0" 
                    onClick={() => handleDownload("docx")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download as DOCX
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download all content as a Word document</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sticky Side Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Content Sections</CardTitle>
                  <CardDescription>Jump to specific sections</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 p-3">
                  {Object.keys(sectionRefs).map((section) => (
                    <Button
                      key={section}
                      variant="ghost"
                      className={`w-full justify-start text-left ${activeSection === section ? "bg-slate-700/50 text-white" : "text-slate-400 hover:text-white"}`}
                      onClick={() => scrollToSection(section as SectionType)}
                    >
                      {section === "bio" && <User className="h-4 w-4 mr-2" />}
                      {section === "skills" && <Code className="h-4 w-4 mr-2" />}
                      {section === "services" && <Briefcase className="h-4 w-4 mr-2" />}
                      {section === "coverLetter" && <MessageSquare className="h-4 w-4 mr-2" />}
                      {section === "proposal" && <FileSpreadsheet className="h-4 w-4 mr-2" />}
                      {section === "keywords" && <Tag className="h-4 w-4 mr-2" />}
                      {section === "portfolio" && <LinkIcon className="h-4 w-4 mr-2" />}
                      {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
                      {activeSection === section && <ChevronRight className="h-4 w-4 ml-auto" />}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 mt-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Platforms</CardTitle>
                  <CardDescription>Switch between platforms</CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PlatformType)} className="w-full">
                    <TabsList className="bg-slate-800/50 w-full grid grid-cols-3">
                      <TabsTrigger
                        value="fiverr"
                        className={`data-[state=active]:bg-gradient-to-r ${platformTheme.fiverr.activeGradient} data-[state=active]:text-white`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                          <span>Fiverr</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="upwork"
                        className={`data-[state=active]:bg-gradient-to-r ${platformTheme.upwork.activeGradient} data-[state=active]:text-white`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600"></div>
                          <span>Upwork</span>
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        value="freelancer"
                        className={`data-[state=active]:bg-gradient-to-r ${platformTheme.freelancer.activeGradient} data-[state=active]:text-white`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
                          <span>Freelancer</span>
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            <Tabs value={activeTab} className="w-full">
              {Object.keys(platformContent).map((platform) => (
                <TabsContent key={platform} value={platform} className="mt-0 space-y-8">
                  {/* Professional Bio */}
                  <ContentCard
                    section="bio"
                    title="Professional Bio"
                    description={`Your professional introduction for ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                    content={platformContent[platform as PlatformType].bio}
                    icon={<User className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.bio || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.bio}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="text"
                  />

                  {/* Skills */}
                  <ContentCard
                    section="skills"
                    title="Skills"
                    description="Your technical expertise and competencies"
                    content={platformContent[platform as PlatformType].skills}
                    icon={<Code className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.skills || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.skills}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="badges"
                  />

                  {/* Services */}
                  <ContentCard
                    section="services"
                    title="Services Offered"
                    description="What you offer to potential clients"
                    content={platformContent[platform as PlatformType].services}
                    icon={<Briefcase className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.services || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.services}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="list"
                  />

                  {/* Cover Letter */}
                  <ContentCard
                    section="coverLetter"
                    title="Cover Letter Template"
                    description={`For ${platform === 'fiverr' ? 'client proposals' : platform === 'upwork' ? 'job applications on Upwork' : 'project proposals on Freelancer.com'}`}
                    content={platformContent[platform as PlatformType].coverLetter}
                    icon={<MessageSquare className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.coverLetter || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.coverLetter}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="text"
                    note="Note: Replace [bracketed text] with specific details for each client"
                  />

                  {/* Proposal Template */}
                  <ContentCard
                    section="proposal"
                    title={platform === 'fiverr' ? 'Gig Description' : platform === 'upwork' ? 'Proposal Template' : 'Bid Template'}
                    description={platform === 'fiverr' ? 'Compelling description that converts visitors to clients' : `For ${platform === 'upwork' ? 'job applications on Upwork' : 'project proposals on Freelancer.com'}`}
                    content={platformContent[platform as PlatformType].proposal}
                    icon={<FileSpreadsheet className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.proposal || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.proposal}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="text"
                  />

                  {/* Keywords */}
                  <ContentCard
                    section="keywords"
                    title={platform === 'upwork' ? 'Skills & Keywords' : 'Tags & Keywords'}
                    description={platform === 'fiverr' ? 'Optimized for discoverability' : platform === 'upwork' ? 'Optimized for Upwork\'s algorithm' : 'Optimized for Freelancer.com'}
                    content={platformContent[platform as PlatformType].keywords}
                    icon={<Tag className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.keywords || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.keywords}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="badges"
                  />

                  {/* Portfolio Projects */}
                  <ContentCard
                    section="portfolio"
                    title="Portfolio Projects"
                    description="Showcase of your best work"
                    content={platformContent[platform as PlatformType].portfolio}
                    icon={<LinkIcon className={`h-5 w-5 mr-2 ${platformTheme[platform as PlatformType].iconClass}`} />}
                    isCopied={copiedSections.portfolio || false}
                    handleCopy={handleCopy}
                    ref={sectionRefs.portfolio}
                    theme={platformTheme[platform as PlatformType]}
                    displayType="portfolio"
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

interface ContentCardProps {
  section: SectionType
  title: string
  description: string
  content: any // This could be string, string[], or portfolio items
  icon: React.ReactNode
  isCopied: boolean
  handleCopy: (text: string, section: SectionType) => void
  theme: any
  displayType: 'text' | 'badges' | 'list' | 'portfolio'
  note?: string
}

const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  ({ section, title, description, content, icon, isCopied, handleCopy, theme, displayType, note }, ref) => {
    // Determine what to copy based on display type
    const getCopyText = () => {
      if (displayType === 'text') return content
      if (displayType === 'badges' || displayType === 'list') return content.join(displayType === 'badges' ? ', ' : '\n• ')
      if (displayType === 'portfolio') return content.map((p: PortfolioProject) => `${p.title}: ${p.description} (${p.link})`).join('\n\n')
      return ''
    }

    // Render content based on display type
    const renderContent = () => {
      switch (displayType) {
        case 'text':
          return (
            <div className={`${theme.bgClass} ${theme.borderClass} rounded-md p-4 text-white whitespace-pre-line ${theme.hoverBgClass} transition-colors duration-200`}>
              {content}
            </div>
          )
        case 'badges':
          return (
            <div className={`${theme.bgClass} ${theme.borderClass} rounded-md p-4 ${theme.hoverBgClass} transition-colors duration-200`}>
              <div className="flex flex-wrap gap-2">
                {content.map((item: string) => (
                  <Badge
                    key={item}
                    className={`${theme.badgeBgClass} ${theme.badgeHoverClass} ${theme.badgeTextClass} ${theme.badgeBorderClass}`}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          )
        case 'list':
          return (
            <div className={`${theme.bgClass} ${theme.borderClass} rounded-md p-4 text-white ${theme.hoverBgClass} transition-colors duration-200`}>
              <ul className="list-disc pl-5 space-y-1">
                {content.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )
        case 'portfolio':
          return (
            <div className="space-y-4">
              {content.map((project: PortfolioProject, index: number) => (
                <div
                  key={index}
                  className={`${theme.bgClass} ${theme.borderClass} rounded-md p-4 text-white ${theme.hoverBgClass} transition-colors duration-200`}
                >
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-slate-300 mt-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme.linkClass} flex items-center mt-2 text-sm`}
                  >
                    <LinkIcon className="h-3 w-3 mr-1" />
                    View Project
                  </a>
                </div>
              ))}
            </div>
          )
        default:
          return null
      }
    }

    return (
      <Card
        className={`bg-slate-800/50 border-slate-700 border transition-all duration-300 ${isCopied ? `shadow-lg shadow-${theme.accentColor}-500/20` : ""}`}
        ref={ref}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <div>
            <CardTitle className="text-xl flex items-center">
              {icon}
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-700"
            onClick={() => handleCopy(getCopyText(), section)}
          >
            {isCopied ? (
              <CheckCircle className={`h-4 w-4 ${theme.iconClass}`} />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {renderContent()}
          {note && (
            <div className="mt-3 text-xs text-slate-400">
              <p>{note}</p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)

ContentCard.displayName = 'ContentCard'