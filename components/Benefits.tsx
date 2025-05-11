import { benefits } from "@/constents/util"


export default function Benefits() {
  return (
    <section className="py-20 ontainer mx-auto bg-slate-900/50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10" />

      <div className="mx-5 md:mx-3 lg:mx-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-sm text-cyan-400 mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Freelancer Profile Launcher?</h2>
          <p className="text-slate-400 text-lg">
            Join thousands of freelancers who are saving time and winning more clients with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center group hover:bg-slate-800/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-slate-700/50 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <benefit.icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {benefit.stat}
                </div>
                <div className="text-sm text-slate-400">{benefit.statLabel}</div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-500/10 to-transparent rounded-r-xl" />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">See the Difference</h3>
              <p className="text-slate-400 mb-6">
                Compare a standard freelancer profile with one optimized by our AI. The difference in quality and impact
                is clear.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Platform-Specific Keywords</h4>
                    <p className="text-sm text-slate-400">
                      Our AI identifies and incorporates the exact keywords that each platform's algorithm prioritizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Conversion-Focused Structure</h4>
                    <p className="text-sm text-slate-400">
                      Profiles are structured to guide potential clients toward contacting you, with clear value
                      propositions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Social Proof Integration</h4>
                    <p className="text-sm text-slate-400">
                      Our AI strategically incorporates your achievements and testimonials to build instant credibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <div className="text-sm text-slate-400 mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                  Standard Profile
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    I am a web developer with experience in React. I can build websites and applications for clients. I
                    have worked on many projects in the past.
                  </p>
                  <p>I am reliable and hardworking. Please contact me if you need a website built.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 rounded-lg p-4">
                <div className="text-sm text-purple-400 mb-2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  AI-Optimized Profile
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    Senior React Developer with 7+ years crafting responsive, high-performance web applications that
                    drive business growth.
                  </p>
                  <p>
                    Specialized in creating seamless user experiences with React, Redux, and Next.js. My projects have
                    helped clients increase conversion rates by an average of 34%.
                  </p>
                  <p>
                    Let's discuss how I can transform your vision into a polished, user-friendly application that
                    exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
