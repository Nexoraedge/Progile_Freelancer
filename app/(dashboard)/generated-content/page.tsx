"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, RefreshCw, Download, ThumbsUp, ThumbsDown } from "lucide-react"
import DashboardLayout from "@/components/Dashboard-layout"

export default function GeneratedContentPage() {
  const [activeTab, setActiveTab] = useState("fiverr")

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Generated Content</h1>
          <p className="text-slate-400">Review and customize your AI-generated profiles for each platform</p>
        </div>

        <Tabs defaultValue="fiverr" className="space-y-6" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center">
            <TabsList className="bg-slate-800/50">
              <TabsTrigger
                value="fiverr"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-500/10 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                    F
                  </div>
                  <span>Fiverr</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="upwork"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-500/10 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                    U
                  </div>
                  <span>Upwork</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="freelancer"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500/20 data-[state=active]:to-orange-500/10 data-[state=active]:text-white"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-bold text-white text-xs">
                    F
                  </div>
                  <span>Freelancer</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 hover:text-white">
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate All
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>

          <TabsContent value="fiverr" className="space-y-8 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Gig Title</CardTitle>
                      <CardDescription>Optimized for Fiverr&apos;s search algorithm</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 text-white">
                      I will create professional, responsive React applications with modern UI/UX
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Gig Description</CardTitle>
                      <CardDescription>Compelling description that converts visitors to clients</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 text-white space-y-4">
                      <p>
                        <strong>
                          Are you looking for a seasoned React developer to bring your web application ideas to life?
                        </strong>
                      </p>
                      <p>
                        With 7+ years of experience in building modern, responsive React applications, I deliver clean,
                        maintainable code that scales with your business needs.
                      </p>
                      <p>
                        <strong>What you'll get:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Custom React application built to your specifications</li>
                        <li>Responsive design that works flawlessly on all devices</li>
                        <li>Modern UI/UX with attention to detail and user experience</li>
                        <li>Clean, well-documented code following best practices</li>
                        <li>Integration with APIs and third-party services</li>
                        <li>Thorough testing and bug-free delivery</li>
                      </ul>
                      <p>
                        <strong>My expertise includes:</strong> React, Redux, Next.js, TypeScript, Tailwind CSS,
                        Material UI, and more.
                      </p>
                      <p>
                        I pride myself on clear communication, meeting deadlines, and exceeding expectations. Let's
                        discuss your project and create something amazing together!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Profile Bio</CardTitle>
                      <CardDescription>Your professional introduction for Fiverr</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 text-white">
                      <p>
                        Senior Full-Stack Developer with 7+ years of experience specializing in React, Node.js, and
                        modern web technologies. I've helped 50+ clients transform their ideas into polished,
                        high-performing applications that users love.
                      </p>
                      <p className="mt-3">
                        My approach combines technical excellence with a deep understanding of business needs, ensuring
                        that every project not only works flawlessly but also achieves your strategic goals. I pride
                        myself on clear communication, attention to detail, and delivering projects on time and within
                        budget.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Tags & Keywords</CardTitle>
                    <CardDescription>Optimized for discoverability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "react developer",
                        "frontend",
                        "web application",
                        "javascript",
                        "responsive design",
                        "react.js",
                        "custom website",
                        "UI/UX",
                        "web development",
                        "single page application",
                      ].map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Cover Letter Template</CardTitle>
                    <CardDescription>For client proposals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 text-white text-sm">
                      <p>Hello [Client Name],</p>
                      <p className="mt-2">
                        Thank you for your interest in my React development services. I've reviewed your project
                        requirements for [Project Description] and I'm confident I can deliver exactly what you're
                        looking for.
                      </p>
                      <p className="mt-2">
                        I've worked on similar projects involving [Relevant Experience] and would approach your project
                        by [Brief Approach].
                      </p>
                      <p className="mt-2">
                        I'd love to discuss your project in more detail. When would be a good time for a quick call?
                      </p>
                      <p className="mt-2">Best regards,</p>
                      <p>John</p>
                    </div>
                    <Button
                      className="w-full mt-4 border-slate-700 hover:bg-slate-800 hover:text-white"
                      variant="outline"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Template
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                    <CardDescription>Help us improve your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 mb-4">How satisfied are you with the generated content?</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-green-500 hover:text-green-400"
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        It's Great
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-red-500 hover:text-red-400"
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        Needs Work
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upwork" className="space-y-8 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Job Title</CardTitle>
                      <CardDescription>Optimized for Upwork&apos;s search algorithm</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-4 text-white">
                      Senior React Developer | Full-Stack JavaScript Expert | Next.js Specialist
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Overview</CardTitle>
                      <CardDescription>Professional summary for your Upwork profile</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-4 text-white space-y-4">
                      <p>
                        <strong>
                          Results-driven Full-Stack Developer with 7+ years of experience building scalable web
                          applications that drive business growth.
                        </strong>
                      </p>
                      <p>
                        I specialize in creating robust, high-performance applications using React, Node.js, and modern
                        JavaScript frameworks. My expertise spans the entire development lifecycle, from initial
                        architecture to deployment and maintenance.
                      </p>
                      <p>
                        <strong>Core competencies:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Front-end development with React, Redux, and Next.js</li>
                        <li>Back-end development with Node.js, Express, and MongoDB</li>
                        <li>RESTful API design and implementation</li>
                        <li>Performance optimization and responsive design</li>
                        <li>Authentication, security, and data protection</li>
                        <li>CI/CD pipelines and deployment strategies</li>
                      </ul>
                      <p>
                        I've successfully delivered projects for startups, mid-sized businesses, and enterprise clients
                        across various industries, consistently meeting deadlines and exceeding expectations.
                      </p>
                      <p>
                        <strong>My approach:</strong> I believe in clear communication, attention to detail, and a focus
                        on delivering business value through technology. I don't just write code; I solve problems and
                        help your business succeed.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Proposal Template</CardTitle>
                      <CardDescription>For job applications on Upwork</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-4 text-white">
                      <p>Hello [Client Name],</p>
                      <p className="mt-3">
                        I'm reaching out regarding your [Project Type] project. Having worked on similar projects
                        involving [Relevant Technology/Industry], I believe I'm well-positioned to help you achieve your
                        goals.
                      </p>
                      <p className="mt-3">
                        What caught my attention about your project is [Specific Detail from Job Post]. Based on your
                        requirements, I would approach this by:
                      </p>
                      <ol className="list-decimal pl-5 mt-3 space-y-1">
                        <li>First, [Initial Approach/Strategy]</li>
                        <li>Then, [Development Process]</li>
                        <li>Finally, [Delivery/Testing Process]</li>
                      </ol>
                      <p className="mt-3">
                        In a recent project, I [Brief Case Study with Results]. I can bring the same level of expertise
                        and attention to detail to your project.
                      </p>
                      <p className="mt-3">
                        I'd welcome the opportunity to discuss your project in more detail. Would you be available for a
                        quick call this week?
                      </p>
                      <p className="mt-3">
                        Best regards,
                        <br />
                        John
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Optimized for Upwork&apos;s algorithm</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                        <Badge
                          key={skill}
                          className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Hourly Rate Suggestion</CardTitle>
                    <CardDescription>Based on your experience and market rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Suggested Rate:</span>
                        <span className="font-bold text-xl text-cyan-400">$50-65/hr</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-md p-3 text-sm text-slate-300">
                        <p>
                          This rate range is competitive for your experience level and skill set on Upwork. It positions
                          you above entry-level developers while remaining attractive to quality clients.
                        </p>
                      </div>
                      <div className="pt-2 text-xs text-slate-500">
                        <p>Market analysis: Senior React developers on Upwork typically charge $45-80/hr</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                    <CardDescription>Help us improve your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 mb-4">How satisfied are you with the generated content?</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-green-500 hover:text-green-400"
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        It's Great
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-red-500 hover:text-red-400"
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        Needs Work
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="freelancer" className="space-y-8 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Profile Title</CardTitle>
                      <CardDescription>Optimized for Freelancer.com&apos;s search</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-4 text-white">
                      Expert React & Full-Stack Developer | 7+ Years Experience | 100% Client Satisfaction
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Profile Description</CardTitle>
                      <CardDescription>Your professional summary for Freelancer.com</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-4 text-white space-y-4">
                      <p>
                        <strong>
                          Top-rated Full-Stack Developer specializing in React and modern JavaScript frameworks with 7+
                          years of professional experience.
                        </strong>
                      </p>
                      <p>
                        I've successfully delivered 50+ projects for clients ranging from startups to established
                        businesses, consistently meeting deadlines and exceeding expectations. My technical expertise
                        combined with strong problem-solving skills allows me to create efficient, scalable, and
                        user-friendly applications.
                      </p>
                      <p>
                        <strong>Services I offer:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Custom web application development</li>
                        <li>Front-end development with React, Redux, and Next.js</li>
                        <li>Back-end development with Node.js and Express</li>
                        <li>API development and integration</li>
                        <li>E-commerce solutions</li>
                        <li>Performance optimization</li>
                        <li>Code review and refactoring</li>
                      </ul>
                      <p>
                        <strong>Why choose me:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Proven track record of successful projects</li>
                        <li>Clear communication and regular updates</li>
                        <li>Clean, well-documented, and maintainable code</li>
                        <li>Focus on delivering business value, not just code</li>
                        <li>Commitment to meeting deadlines</li>
                      </ul>
                      <p>
                        I'm ready to help you bring your ideas to life with high-quality code and exceptional service.
                        Let's discuss your project!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 mt-6">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-xl">Bid Template</CardTitle>
                      <CardDescription>For project proposals on Freelancer.com</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-md p-4 text-white">
                      <p>Hello [Client Name],</p>
                      <p className="mt-3">
                        I've reviewed your project requirements for [Project Name/Description] and I'm confident I can
                        deliver an exceptional solution that meets all your needs.
                      </p>
                      <p className="mt-3">
                        <strong>Why I'm the right developer for this project:</strong>
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          I have [X years/relevant experience] with [specific technologies mentioned in the project]
                        </li>
                        <li>I've successfully completed similar projects, including [brief example]</li>
                        <li>
                          I understand the importance of [key project requirement] and know how to implement it
                          effectively
                        </li>
                      </ul>
                      <p className="mt-3">
                        <strong>My approach to your project:</strong>
                      </p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>[Initial phase - planning, requirements gathering]</li>
                        <li>[Development phase - key implementation details]</li>
                        <li>[Testing and delivery phase]</li>
                      </ol>
                      <p className="mt-3">
                        I'm available to start immediately and can deliver the project within [timeframe]. I'd be happy
                        to discuss the details further and answer any questions you might have.
                      </p>
                      <p className="mt-3">Looking forward to working with you!</p>
                      <p className="mt-3">
                        Best regards,
                        <br />
                        John
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Optimized for Freelancer.com</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "JavaScript",
                        "Node.js",
                        "Web Development",
                        "Full Stack",
                        "Front End",
                        "API Development",
                        "MongoDB",
                        "MySQL",
                        "UI/UX",
                        "Responsive Design",
                        "Git",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border-orange-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Pricing Strategy</CardTitle>
                    <CardDescription>Recommendations for Freelancer.com</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 rounded-md p-3 text-sm">
                        <p className="font-medium text-orange-400 mb-2">Competitive Bidding Strategy</p>
                        <p className="text-slate-300">
                          Freelancer.com is highly competitive on price. Consider starting with slightly lower bids to
                          build reputation, then gradually increase as you gain positive reviews.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-900/50 rounded-md p-3 text-center">
                          <p className="text-xs text-slate-400 mb-1">Hourly Rate</p>
                          <p className="font-bold text-orange-400">$40-55/hr</p>
                        </div>
                        <div className="bg-slate-900/50 rounded-md p-3 text-center">
                          <p className="text-xs text-slate-400 mb-1">Project Bids</p>
                          <p className="font-bold text-orange-400">+15% margin</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                    <CardDescription>Help us improve your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 mb-4">How satisfied are you with the generated content?</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-green-500 hover:text-green-400"
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        It's Great
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-700 hover:border-red-500 hover:text-red-400"
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        Needs Work
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
