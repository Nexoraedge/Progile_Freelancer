import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Upload } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 container mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="mx-5 md:mx-3 lg:mx-10 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
              Ready to Transform Your Freelance Presence?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join thousands of freelancers who are using our platform to stand out, win more clients, and increase
              their income.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800/50 border-slate-700 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 whitespace-nowrap">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-400">Join 2,000+ freelancers already using our platform</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/40 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Secure & Private</span>
                  </div>
                  <p className="text-sm text-slate-400">Your data is encrypted and never shared with third parties.</p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/40 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Cancel Anytime</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    No long-term contracts. Cancel your subscription at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold">Jump-Start with Your CV</h3>
                <p className="text-sm text-slate-400">Upload your CV to instantly create your base profile</p>
              </div>

              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-slate-400" />
                </div>
                <p className="text-sm text-slate-400 mb-4">Drag and drop your CV/resume here, or click to browse</p>
                <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
                  Browse Files
                </Button>
                <p className="text-xs text-slate-500 mt-4">Supports PDF, DOCX, TXT (Max 5MB)</p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">AI extracts your skills & experience</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Instantly creates your base profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Ready to generate platform profiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
