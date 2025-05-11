import { cn } from "@/lib/utils"
import { features } from "@/constents/util"

export default function Features() {
  return (
    <section id="features" className="py-20 container mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className=" relative mx-3 sm:mx-4 md:mx-3 lg:mx-10 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-400 mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to dominate freelance platforms</h2>
          <p className="text-slate-400 text-lg">
            Our AI-powered tools help you create optimized profiles that stand out from the competition and win more
            clients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110",
                  feature.color,
                )}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
