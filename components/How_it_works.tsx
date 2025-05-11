"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { steps } from "@/constents/util"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="how-it-works" className="py-20 container mx-auto relative ">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="mx-5 sm:mx-6 md:mx-1 lg:mx-10  relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg">
            Four simple steps to transform your freelance presence across all major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "relative pl-12 pr-6 py-6 rounded-xl transition-all duration-300 cursor-pointer group",
                  activeStep === step.id
                    ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg"
                    : "hover:bg-slate-800/30",
                )}
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br shadow-lg",
                    step.color,
                  )}
                >
                  {step.id}
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <step.icon className="mr-2 h-5 w-5 text-purple-400" />
                      {step.title}
                    </h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>

                  <div
                    className={cn("opacity-0 transition-opacity duration-300", activeStep === step.id && "opacity-100")}
                  >
                    <ArrowRight className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <h3 className="font-semibold text-lg">Create Your Base Profile</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="text-sm text-slate-400">Full Name</label>
                      <div className="h-10 bg-slate-700/50 rounded-md border border-slate-600/50" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm text-slate-400">Professional Title</label>
                      <div className="h-10 bg-slate-700/50 rounded-md border border-slate-600/50" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm text-slate-400">Skills (Select up to 10)</label>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "UI/UX Design", "JavaScript", "TypeScript"].map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {skill}
                        </div>
                      ))}
                      <div className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-slate-400">
                        + Add Skill
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm text-slate-400">Professional Summary</label>
                    <div className="h-24 bg-slate-700/50 rounded-md border border-slate-600/50" />
                  </div>

                  <div className="border border-dashed border-slate-600 rounded-md p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-slate-400 mb-2">Or upload your CV to auto-fill</p>
                    <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
                      Upload CV
                    </Button>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <h3 className="font-semibold text-lg">Select Your Target Platforms</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 border border-purple-500/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white">
                        F
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Fiverr</h4>
                        <p className="text-xs text-slate-400">Gig-based marketplace</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                      </div>
                    </div>

                    <div className="bg-slate-700/30 border border-purple-500/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white">
                        U
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Upwork</h4>
                        <p className="text-xs text-slate-400">Project-based platform</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                      </div>
                    </div>

                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-bold text-white">
                        F
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Freelancer</h4>
                        <p className="text-xs text-slate-400">Competitive bidding</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                    </div>

                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center font-bold text-white">
                        T
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Toptal</h4>
                        <p className="text-xs text-slate-400">Elite freelancers</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                    </div>

                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white">
                        L
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">LinkedIn</h4>
                        <p className="text-xs text-slate-400">Professional network</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                    </div>

                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center font-bold text-white">
                        +
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Add Custom</h4>
                        <p className="text-xs text-slate-400">Your own platform</p>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <h3 className="font-semibold text-lg">Generate Platform-Optimized Content</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                        F
                      </div>
                      <span className="font-medium">Fiverr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-500 text-sm">Generated</span>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm text-slate-400">Gig Title</h4>
                      <p className="text-sm bg-green-500/10 border border-green-500/30 rounded-md p-2">
                        I will create professional, responsive React applications with modern UI/UX
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm text-slate-400">Gig Description (Preview)</h4>
                      <div className="text-sm bg-green-500/10 border border-green-500/30 rounded-md p-2 space-y-2">
                        <p>
                          Are you looking for a seasoned React developer to bring your web application ideas to life?
                        </p>
                        <p>
                          With 7+ years of experience in building modern, responsive React applications, I deliver
                          clean, maintainable code that scales with your business needs.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm text-slate-400">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {["react developer", "frontend", "web application", "javascript", "responsive design"].map(
                          (tag) => (
                            <div
                              key={tag}
                              className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-300"
                            >
                              {tag}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                        U
                      </div>
                      <span className="font-medium">Upwork</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                      <span className="text-purple-500 text-sm">Generating...</span>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex items-center justify-center h-32">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mb-2" />
                      <p className="text-sm text-slate-400">Optimizing for Upwork's algorithm...</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-4">
                    <h3 className="font-semibold text-lg">Customize and Launch</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white text-xs">
                          F
                        </div>
                        <span className="font-medium text-sm">Fiverr</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-sm text-green-500 mt-3">Ready to Launch</p>
                    </div>

                    <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                          U
                        </div>
                        <span className="font-medium text-sm">Upwork</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-sm text-green-500 mt-3">Ready to Launch</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="font-medium mb-2">Launch Options</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center mr-2">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                        </div>
                        <span className="text-sm">Launch all profiles at once</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-600 mr-2" />
                        <span className="text-sm">Launch profiles individually</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-600 mr-2" />
                        <span className="text-sm">Schedule launches for optimal times</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300">
                    Launch My Profiles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
