"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {

  return (
    <section className="relative pt-30 pb-20  container mx-auto overflow-hidden">
      <div className="xl:mx-10  mx-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4 max-w-xl mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                One Profile. All Platforms. More Clients.
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Create one professional profile and instantly generate platform-specific bios, gig descriptions, and
                tags for Fiverr, Upwork, and more.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
                <Link href="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group"
              >
                Launch My Profile
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              <Link href="video">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-300"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
              </Link>
            </div>

            <div
              className="flex items-center justify-center md:justify-start gap-4 text-sm text-slate-400"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Join 2,000+ freelancers already using our platform</span>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                AI-Powered
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1" />
                  </div>
                  <div className="h-8 bg-slate-700/50 rounded-md flex items-center px-3">
                    <div className="w-4 h-4 rounded-full bg-purple-500 mr-2" />
                    <span className="text-sm text-slate-300">freelancerprofilelauncher.com</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 bg-slate-700/70 rounded-md" />
                    <div className="h-24 bg-slate-700/70 rounded-md" />
                    <div className="h-24 bg-slate-700/70 rounded-md" />
                    <div className="h-24 bg-slate-700/70 rounded-md" />
                  </div>
                  <div className="col-span-2 bg-slate-700/30 rounded-md p-4 space-y-4">
                    <div className="h-8 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-md" />
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-600/50 rounded-md w-full" />
                      <div className="h-4 bg-slate-600/50 rounded-md w-5/6" />
                      <div className="h-4 bg-slate-600/50 rounded-md w-4/6" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-600/50 rounded-md" />
                        <div className="h-20 bg-purple-500/20 border border-purple-500/30 rounded-md p-2">
                          <div className="h-3 bg-purple-500/40 rounded-sm w-5/6 mb-1" />
                          <div className="h-3 bg-purple-500/40 rounded-sm w-4/6 mb-1" />
                          <div className="h-3 bg-purple-500/40 rounded-sm w-3/6" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-600/50 rounded-md" />
                        <div className="h-20 bg-cyan-500/20 border border-cyan-500/30 rounded-md p-2">
                          <div className="h-3 bg-cyan-500/40 rounded-sm w-5/6 mb-1" />
                          <div className="h-3 bg-cyan-500/40 rounded-sm w-4/6 mb-1" />
                          <div className="h-3 bg-cyan-500/40 rounded-sm w-3/6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-8 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-md" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-md p-3 border border-slate-700/50">
                  <div className="text-xs text-slate-400 mb-2">Example Generated Bio for Upwork:</div>
                  <p className="text-sm text-slate-300">
                    "Senior Full-Stack Developer with 7+ years experience specializing in React, Node.js, and AWS.
                    Delivered 50+ projects with 100% client satisfaction. Ready to bring your vision to life with clean,
                    scalable code and exceptional communication."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  )
}
